import React from 'react'
import {Menu, Input} from 'semantic-ui-react'
export  function Footer() {
  return(
    <div>
      <Menu>
        <Menu.Item disabled>
          (c) Desarrollo Realizado Por la asignatura de Interfaces y Multimedia
        </Menu.Item>
        <Menu.Item position='rigth'>
          <Input disabled label='Autor> Interfaces y Multimedia'></Input>
        </Menu.Item>
        <Menu.Item>
          <Input disabled label='Año 2023'></Input>
        </Menu.Item>
      </Menu>
        <footer className='container'>

          <h1 className='container__letra'>Footer UIDE</h1>
          <p className='container__parrafo'>
            (c)Mi proyecto React<br/>
            <a href='/'>Politicas de privacidad</a><br/>
            <a href="/">Terminos y condiciones</a><br/>
          </p>
        </footer>


    </div>
  )
}
