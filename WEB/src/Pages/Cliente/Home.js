import React from 'react'
import { Footer, Header,ListaEmprendimientos} from '../../Componentes/Cliente'

export function Home() {
  return (
    <div>
        <Header/>
        <ListaEmprendimientos/>
        <Footer/>
    </div>
  )
}
