import Link from 'next/link'
import React from 'react'
import Button from './Button/Button'

const Sidebar = () => {
  return (
    <aside className={`sidebar-desktop
        flex flex-col bg-[#FFAFAF] justify-between items-center
        `}>
      <div className="flex flex-col items-center justify-between gap-8">
        <div className="w-[130px] h-[130px] bg-white rounded-full">
        </div>

        <h1 className="font-bold text-black text-[20px]">Blanca Nieves</h1>

        <Button buttonText='Mis reservas' url="/dashboard/my-reservations"/>
        <Button buttonText='Reservas mundiales' url="/dashboard/all-reservations" />
      </div>
      <div className="flex justify-center items-center">
        <Button buttonText='Log Out' url='/'/>
      </div>


    </aside>
  )
}

export default Sidebar