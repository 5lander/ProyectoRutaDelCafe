import React from 'react'
import './footer.css'
export  function Footer() {
  return(
    <div>
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>About</h6>
                <p class="text-justify">
                  <i>UIDE </i> 
                  La Universidad Internacional del Ecuador (UIDE) debe su existencia a la visión del educador, escritor, periodista,
                  diplomático y humanista, don Jorge Fernández Salazar. El 21 de octubre de 1992, con la aprobación del Consejo
                  Nacional de Universidades y Escuelas Politécnicas (CONUEP), Marcelo Fernández Sánchez, Canciller Fundador, 
                  materializó la visión de su padre dando inicio a las actividades de la UIDE, nuestra universidad.
                </p>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>UIDE</h6>
                <ul class="footer-links">
                  <li><a href="https://www.uide.edu.ec/quienes-somos/">UIDE</a></li>
                  <li><a href="https://www.uide.edu.ec/pregrado-presencial/loja/facultad-de-ciencias-tecnicas/tecnologias-de-la-informacion-y-comunicacion/">TICS</a></li>
                  <li><a href="https://www.uide.edu.ec/pregrado-presencial/#loja">SEDE LOJA</a></li>
                </ul>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>San Pedro de Vilcabamba</h6>
                <ul class="footer-links">
                  <li><a href="https://www.google.com/maps/place/San+Pedro+de+Vilcabamba/@-4.2427888,-79.2260708,17z/data=!3m1!4b1!4m10!1m2!2m1!1ssan+pedro+de+vilcabamba+info!3m6!1s0x91cb28b59a06cfdf:0xb8adc4da8d129150!8m2!3d-4.242405!4d-79.2215001!15sChxzYW4gcGVkcm8gZGUgdmlsY2FiYW1iYSBpbmZvkgEMbmVpZ2hib3Job29k4AEA!16s%2Fg%2F11_t_3jlk">Mapa</a></li>
                  <li><a href="http://scanfcode.com/contact/">GAD</a></li>
                  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Facebook</a></li>
                </ul>
              </div>
            </div>
            <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
            <a href="#">UIDE</a>.
                </p>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li><a class="facebook" href="https://www.facebook.com/UIDEonline"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter" href="https://twitter.com/UIDE"><i class="fa fa-twitter"></i></a></li>
                  <li><a class="dribbble" href="https://www.instagram.com/uide_ec/?hl=en"><i class="fa fa-instagram"></i></a></li>  
                </ul>
              </div>
            </div>
            </div>
          </div>
        </footer>


    </div>
  )
}
