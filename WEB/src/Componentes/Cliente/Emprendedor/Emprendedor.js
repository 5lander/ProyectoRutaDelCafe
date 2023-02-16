import React from 'react'
import { useEffect, useState } from 'react'


export function Emprendedor() {

    const[data,setData]=useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/administrativo/api/emprendedores")
        .then((response)=>response.json())
        .then((data)=>{setData(data)})
        // .then((data)=>console.log(data))
    })
    return (
        <div className="container">
          {data?.map((item) => (
            <div className="card-group" >
            <div className="col-md-3">  
            <div className="card text-center" key={item.id}>
            
              <div className="card-body body">
                <img
                  src={`${item.foto}`}
                  ul={false}
                  className="img_enprendimiento"
                ></img>
  
                
              <div className='row'>
                {item.nombreEmprendimiento}
              </div>
            
             
               
              </div>
              
             
    
            </div> 
            </div>
            
            
  

          </div>
                    ))}
        </div>
    
       
        
      );
  }