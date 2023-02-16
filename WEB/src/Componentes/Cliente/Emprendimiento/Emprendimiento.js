import React from 'react'
import { useEffect, useState } from 'react'
import './Emprendimiento.scss'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function Emprendimiento() {

    const[data,setData]=useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/administrativo/api/emprendimientos")
        .then((response)=>response.json())
        .then((data)=>{setData(data)})
        // .then((data)=>console.log(data))
    })
    return (
      <div>
        
      
        <Grid container direction="row" justify="flex-start" aligItems="flex-start">

          {data.map((item) => (
            <div key={item.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                src={`${item.foto}`}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.nombreE}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {item.descripcion}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
                    ))}
        </Grid>
      </div>
    
       
        
      )
  }