import React from 'react'
import { useEffect, useState } from 'react'
import {Grid,Card,Icon,Image} from 'semantic-ui-react'
import './Producto.scss'

export function Producto() {

    const[data,setData]=useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/administrativo/api/productos")
        .then((response)=>response.json())
        .then((data)=>{setData(data)})
        // .then((data)=>console.log(data))
    })
    return (
      <div className='contenedorProductos'>
        <Grid className='organizador' columns={4} divided >
              {data.map((item) => (
                <div key={item.id}>
                    <Card className='organizadortarjeta'>
                      <Image src={item.foto} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>{item.nombreP}</Card.Header>
                      </Card.Content>
                      <Card.Content extra>
                        <a href='/reserva'>
                        <button class="ui button">
                          <Icon name='triangle right' />
                          Comprar Producto
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