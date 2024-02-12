import React from 'react'

const Sidebar = () => {
  return (
    <aside className={`sidebar-desktop
        flex flex-col bg-[#FFAFAF]
        `}>
        <div className="flex flex-col items-center justify-between gap-9">
            <h1>Circulo</h1>
            <h1>Name </h1>
        </div>
        <div className="flex flex-col justify-between h-full">
        <nav>
          <ul className="flex flex-col gap-3">
            {/* <SidebarLink href="/inventory-management" title={"Inventario"} /> */}
            {/* <SidebarLink href="/materials-management" title={"Materiales"} /> */}
            {/* <PrivateRoute role={"ADMIN"}> */}
              {/* <SidebarLink href="/users-management" title={"Usuarios"} /> */}
            {/* </PrivateRoute> */}
          </ul>
        </nav>
        <button type="button" className="border-1">
          Log out
        </button>
      </div>
        
    </aside>
  )
}

export default Sidebar