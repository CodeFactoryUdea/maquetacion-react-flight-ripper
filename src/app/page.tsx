import Link from 'next/link'
import React from 'react'
import BoxComponent from '@/app/components/box'

const page = () => {
  return (
    <div className="
    w-full h-full bg-slate-400 text-white
    flex flex-col
    justify-around items-center
    border border-black
    overflow-y-auto
    ">
      <div className="border border-gray-700
        rounded-3xl p-4 my-4
      ">
        <h1>Let's assume this is login page</h1>
      </div>

      <Link href="/dashboard">go to Dashboard</Link>
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
     
    </div>
  )
}

export default page