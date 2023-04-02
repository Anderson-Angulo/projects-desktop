import axios from "axios"
import {useState} from 'react'


const API2="https://rickandmorty.com/api/character/2"
const API1="https://rickandmorty.com/api/character/2"
const getCoolMorty=()=>{
  const controller=new AbortController()
  return {
    call: axios.get(API2,{signal:controller.signal}),
    controller
  }
}

const getCoolRick=()=>{
  const controller=new AbortController()
  return {
    call: axios.get(API1,{signal:controller.signal}),
    controller
  }
}


const useFetchAndLoad=()=>{
  let controller
  const [loading, setLoading] = useState(false);

  callEndpoint=async (axiosCall)=>{
    if(axiosCall.controller) {
      controller=axiosCall.controller
    }
    let result
    setLoading(true)
    try{
      result = await axiosCall.call
    }catch(e){}
    setLoading(false)
    return result
  }

  cancelEndpoint=()=>{
    setLoading(false)
    controller && controller.abort()
  }

  useEffect(()=>{
    return ()=>{
      cancelEndpoint()
    }
  },[])

}