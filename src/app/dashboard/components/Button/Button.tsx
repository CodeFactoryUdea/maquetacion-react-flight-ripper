'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface ButtonProps {
    buttonText: string;
    url?: string;
}

const Button = ({buttonText, url = '#'}:ButtonProps) => {
    const pathname = usePathname()
    const isActive = pathname === url;


  return (
    <>
        <Link href={url}>
            <li className={isActive ? "active" : ""}>{buttonText}</li>
        </Link>
    </>
  )
}

export default Button