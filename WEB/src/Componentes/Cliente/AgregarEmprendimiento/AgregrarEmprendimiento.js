import React from 'react'
import {Form, FormGroup, Label,Input} from 'reactstrap'
import axios from 'axios'
import { Button } from 'semantic-ui-react'

//onSubmit={this.props.Emprendimiento ? this.editarEmprendimiento :this.crearEmprendimiento}
export class AgregrarEmprendimiento extends React.Component {

  emprendimiento={
    'ruc':'',
    'nombreEmprendimiento':'',
    'direccion':'',
    'telCelular':'',
    'telFijo':'',
    'horaApertura':null,
    'horaCierre ':null,
    'altitud':'',
    'latitud':'',
    'servicio':0,
    'foto':'',
    'video':'',
    'instagram':'',
    'facebook':'',
  };
  componentePermanente(){
    if(this.props.emprendimiento){
      const{ruc,nombreEmprendimiento,direccion,telCelular,
            telFijo,horaApertura,horaCierre,altitud,latitud,
            servicio,foto,video,instagram,facebook
    }=this.props.emprendimiento
      this.setEmprendimiento(
        {ruc,nombreEmprendimiento,direccion,telCelular,telFijo,
        horaApertura,horaCierre,altitud,latitud,servicio,
        foto,video,instagram,facebook}
      )
    }
  }
  onChange =e => {
    this.setEmprendimiento({[e.target.name]: e.target.value });


  }

crearEmprendimiento = e =>{
    e.preventDefault();
    axios.put('http://127.0.0.1:8000/administrativo/api/emprendimientos'+ this.emprendimiento.id,this.emprendimiento)
    .then(()=>{})
}

  render(){ 
  return (
    <div>
        <Form >
            <FormGroup>
                <Label for='ruc'>Nombre del Emprendimiento</Label>      
                <Input type="text" name="ruc" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='nombreEmprendimiento'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="nombreEmprendimiento" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='direccion'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="direccion" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='telCelular'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="telCelular" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='telFijo'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="telFijo" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='descripcion'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="descripcion" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='horaApertura'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="horaApertura" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='horaCierre'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="horaCierre" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='altitud'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="altitud" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='latitud'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="latitud" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='servicio'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="servicio" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='foto'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="foto" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='video'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="video" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='instagram'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="instagram" onChange={this.onChange}></Input>          
            </FormGroup>
            <FormGroup>
                <Label for='facebook'>Descripcion del Emprendimiento</Label>      
                <Input type="text" name="facebook" onChange={this.onChange}></Input>          
            </FormGroup>
            <Button>Enviar Emprendimientos</Button>
        </Form>
    </div>
  )
}
}