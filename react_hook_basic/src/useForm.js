import { useState } from 'react'

export default function useForm(intialValues){
    const [value,setValue] = useState(intialValues)

    return [value,e=>{
        setValue({
            ...value,
            [e.target.name]:[e.target.value]
        })
    }]
}