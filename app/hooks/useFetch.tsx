import { useEffect, useState } from "react"



const useFetch = (url :string) =>{

    const [data, setData] = useState()

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[url])
    return data
}


export default useFetch;