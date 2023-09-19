
'use client'
import Image from 'next/image'
import {useState} from 'react'
import Normal from '../../image/google/btn_google_signin_dark_normal_web.png'
import Focus from '../../image/google/btn_google_signin_dark_focus_web.png'
type Props = {
    alt: string
}

export const AuthButton = (props:Props) => {
    const [isFocus, setIsFocus] = useState(false)
    const setSrc =()=>{
        if(isFocus){
            return Focus
        }else{
            return Normal
        }
    }

  return (
    <a>
        <Image width={100} height={100} onFocus={()=>{setIsFocus(!isFocus)}} src={setSrc()} alt={props.alt} />
    </a>
  )  
}