import { useEffect,useState } from 'react'


export default function useForm(url){
    const [value,setValue] = useState({data:null,loading:true})

    useEffect(()=>{
        setValue({data:value.data,loading:true})
        fetch(url)
        .then(x=>x.text())
        .then(y=>{
            setValue({data:y,loading:false})
        })
    },[url])
    
    return [value.data,value.loading]
}