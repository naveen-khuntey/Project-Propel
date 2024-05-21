import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
function MainLayout() {
  return (
    <div>
      <header>
       navbar
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}

export default MainLayout
