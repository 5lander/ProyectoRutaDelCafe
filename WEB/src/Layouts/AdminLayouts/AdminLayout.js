import React from 'react'
import './AdminLayout.scss'
import { LoginAdmin } from '../../Pages/Admin/LoginAdmin'


export  function AdminLayout(props) {
    const { children } =props
    const auth= null;
    if (!auth) return <LoginAdmin/>
  return (
    <div>
            <h1>Pantalla Administradores</h1>
        { children }
    </div>



  )
}
