import React from 'react'

export  function DescripcionEmprendimiento() {
  
  const[data,setData]=useState([]);

  useEffect(()=>{
      fetch("http://127.0.0.1:8000/administrativo/api/emprendimientodetalles/<int:id_emprendimiento>")
      .then((response)=>response.json())
      .then((data)=>{setData(data)})
      // .then((data)=>console.log(data))
  })
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div class="container">
          <div class="nombreEmprendimiento">
            <div class="cajonNombre">
              <div class="nombrecaja">
                <h1 class="nombre">&nbsp;{item.nombreEmprendimiento}</h1>
              </div>
            </div>
              <div class="profile">
                <div class="content">
                  <div class="btn"><span></span></div>
                </div>
                <div class="box">
                  <i>
                  <a href="{item.facebook}" class="fa fa-facebook"></a>
                  </i>
                  <i>
                    <a href="{item.instagram}" class="fa fa-instagram"></a>

                  </i>
                </div>
              </div>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script><script  src="/static/js/script.js"></script>
              
          </div>
          <div class="multimedia">
            <div class="video">
              <iframe class="videoi"width="560" height="315" src="{{ item.video }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="descripcionEmprendimiento">
              <div class="clasetextdes">
                <p class="descripciontext">
                  {item.descripcion}
                </p>
              </div>
            </div>
          </div>
          <div class="infoEmprendimiento">
            <div class="contenedorEmprendimiento">
              <div class="datosEmprendimiento">
                <div class="descripcionemprendimientos">
                  <div class="emprendimientotxt">
                    <p class="descripciontext">Direccion:{ item.direccion}</p>
                    <p class="descripciontext">Contacto 1:{item.telCelular}</p>
                    <p class="descripciontext">Hora de Apertura:{ item.horaApertura}</p>
                    <p class="descripciontext">Hora de Cierre:{item.horaCierre}</p>
                  </div>
                </div>
              </div>
            </div>
              <div class="Datostodos">
                <div class="imagenemprendimiento">
                  <img src="/media/{{emprende.foto}}" alt="" class="imge"></img>
                </div>
              </div>
          </div>
          </div>
        </div>
      ))};
      
    </div>
  )
}


