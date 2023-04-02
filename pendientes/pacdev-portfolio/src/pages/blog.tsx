import { components } from "@/lib/sanity-components"
import { client, urlFor } from "@/lib/sanity.config"
import { PortableText } from '@portabletext/react'
import { groq } from "next-sanity"

export default function Blog({posts}:{posts:any}) {
  return (
    <div>
      {
        posts.map((post:any)=>(
          <article key={post._id}>
            <h1>{post.title}</h1>
            <div>
              <img src={urlFor(post.mainImage).url()} alt="Imagen" width={250} />
            </div>
            <PortableText 
              value={post.body}
              components={components}
            />
            
          </article>
        ))
      }
    </div>
  )
}


export  async function getStaticProps(){
  const posts=await client.fetch(groq`
      *[_type == "post"]
  `)
  return {
    props:{
      posts
    }
  }
}