const $links=document.getElementById('main')
const $name=document.querySelector('h1')
const data = 
{
    name: "Piero Angulo Cubas",
    nickname: "sexcode007",
    description: "...",
    avatar: "...",
    social: 
    [
      {
        name: "twitter",
        url: "https://twitter.com/",
        username: "",
      },
      {
        name: "instagram",
        url: "https://instagram.com/",
        username: "",
      },
    ],
    
    links: 
    [
      {
        name: "blog",
        url: "https://example.com/",
        color: "red",
        emoji: "📖",
      },
      {
        name: "podcast",
        url: "https://example.com/",
        color: "yellow",
        emoji: "💬",
      },
    ],
    footer: "Made with Love on Colombia",
};

const main=()=>{
  let name=document.createTextNode(data?.name)
  let links=data?.links.map((link)=>{
    return `
            <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
              <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
                href="${link.url}" target="_blank">
                ${link.name}
              </a>
              <span>${link.emoji}</span>
            </div>  
          `
  }).join('')
  const section=document.createElement('section')
  section.innerHTML=links
  section.id="links"
  $links.appendChild(section)
  $name.appendChild(name)
}

main()