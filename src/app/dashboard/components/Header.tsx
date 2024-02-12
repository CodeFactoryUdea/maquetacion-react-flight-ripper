import React from 'react'

const Header = () => {
    return (
        <header className="flex h-16 justify-left items-center justify-between px-5 py-2 border border-blue-300 bg-[#451010]">
            <div className="text-30 text-white font-bold ml-2 tracking-tight">
                TITULO
            </div>
            <div className="">
                {/* <Image src={"/avatar-simple.png"} alt={""} width={40} height={40} /> */}
            </div>
        </header>
    )
}

export default Header