import React from 'react'
import {Form, FormGroup, Label,Input} from 'reactstrap'
import { Button } from 'semantic-ui-react'
import './AgregarReserva.scss'

//onSubmit={this.props.reserva ? this.editarreserva :this.crearreserva}
export class AgregarReserva extends React.Component {

  reserva={

    'fechaReserva':'',
    'cantidad':0,
    'valor':'',
  };
  componentePermanente(){
    if(this.props.reserva){
      const{fechaReserva,cantidad,emprendimiento,valor
    }=this.props.reserva
      this.setreserva(
        {fechaReserva,cantidad,emprendimiento,valor}
      )
    }
  }
  onChange =e => {
    this.setreserva({[e.target.name]: e.target.value });


  }

crearreserva = e =>{
    // e.preventDefault();
    // axios.put('http://127.0.0.1:8000/administrativo/api/reservas'+ this.reserva.id,this.reserva)
    // .then(()=>{})
}

  render(){ 
  return (
    <div>
        <Form className='formopciones'>
            <FormGroup>
                <Label for='fechaReserva'>Fecha de la reserva</Label>      
                <Input type="text" name="fechaReserva" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='cantidad'>Cantidad a reservar</Label>      
                <Input type="text" name="cantidad" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='emprendimiento'>Emprendimiento</Label>      
                <Input type="text" name="emprendimiento" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='valor'>valor del producto</Label>      
                <Input type="text" name="valor" onChange={this.onChange}></Input>          
            </FormGroup>
            <Button className="volver">
                <a href="javascript:history.back(-1)">
                  Regresar
                </a>
            </Button>
            <Button>Enviar reservas</Button>

        </Form>
    </div>
  )
}
}