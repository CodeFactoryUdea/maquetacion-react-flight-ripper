import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    buttonText: string;
    url?: string;
}

const Button = ({buttonText, url = '#'}:ButtonProps) => {
  return (
    <>
        <Link href={url} 
          className="bg-[#FB7979] w-60 h-14 
          hover:bg-[#FC8F8F] active:bg-[#E94C4C]
          flex items-center justify-center rounded-[30px]">{buttonText}</Link>
    </>
  )
}

export default Button