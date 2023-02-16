import React from 'react'
import { useEffect, useState } from 'react'
import './listaEmprendimientos.scss'
import {Grid,Card,Icon,Image} from 'semantic-ui-react'


export function ListaEmprendimientos() {

    const[data,setData]=useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/administrativo/api/emprendimientos")
        .then((response)=>response.json())
        .then((data)=>{setData(data)})
        // .then((data)=>console.log(data))
    })
    return (
      <div className='contenedorEmprendimientos'>
        <Grid className='organizador' columns={4} divided >
              {data.map((item) => (
                <div key={item.id}>
                    <Card className='organizadortarjeta'>
                      <Image src={item.foto} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>{item.nombreEmprendimiento}</Card.Header>
                        <Card.Meta>{item.direccion}</Card.Meta>
                        <Card.Description>
                          {item.descripcion}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <a href='/emprendimiento'>
                        <button class="ui button">
                          <Icon name='triangle right' />
                          Ver Emprendimiento
                          </button>
                        </a>
                      </Card.Content>
                    </Card>
              </div>
                        ))}
        </Grid>
      </div>
    
       
        
      )
  }