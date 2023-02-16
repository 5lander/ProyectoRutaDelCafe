import React from 'react'
// import {Menu, Input} from 'semantic-ui-react'
export  function Header() {
  return(
    <div>
      <header className='header'>
        <div className='header__box'>
          <span className='header__primary'>UIDE - LOJA</span>
        </div>
        <div className='text-box'>
          <h1 className='primario'>

            <span className='primario__main'> Bienvenidos al sitio de emprendimientos</span> 
            <span className='primario__sub'> San Pedro de Vilcabamba</span>
          </h1>
          <a href='/' className='btn btn-white btn-animated'>
            Realiza turismo ecologico   con la Ruta del Emprendimiento
          </a>
        </div>
      </header> 
    </div>
  )
}
