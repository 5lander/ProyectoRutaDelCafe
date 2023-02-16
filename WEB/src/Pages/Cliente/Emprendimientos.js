import React from 'react'
import { Footer, Header,Emprendimiento,AgregrarEmprendimiento} from '../../Componentes/Cliente'

export  function Emprendimientos() {
  return (
    <div>
        <Header></Header>
        <Emprendimiento/>
        <AgregrarEmprendimiento/>
        <Footer></Footer>
    </div>
  )
}
