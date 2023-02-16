import React from 'react';
import './LoginAdmin.scss';
import { Loginform } from '../../../Componentes/Admin';
export function LoginAdmin(props) {
    return (  
    <div>
        <div className='login-admin'>
          <div className='login-admin__content'>
             <h1>Entrar al formulario </h1>

             <Loginform/>
          </div>
          
        </div>



    </div>
  )
}
