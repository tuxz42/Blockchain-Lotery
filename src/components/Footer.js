import React from "react";

const MyFooter = () => (
    <footer style={{ backgroundColor: 'rgba( 230, 230, 250, 1)' }} className='text-center text-lg-start text-muted'>
      <section className='border-bottom'>
        <div className='container text-center text-md-start mt-5'>
        &nbsp;
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Matic Lotto
              </h6>
              <p>
              ¡Únete a nuestra comunidad de Matic Lotto! ¡Adquiere tus tickets y entra en nuestro sorteos para ganar increíbles premios en Matic! ¡No te pierdas esta oportunidad de aumentar tu cartera¡Compra tu billete ahora!
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Redes Sociales</h6>
              <p>
                <a href='https://t.me/lottomatic/' className='text-reset'>
                  Telegram Oficial
                </a>
              </p>
              
            </div>
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <i className='fas fa-envelope me-3'></i>
                https://t.me/lottomatic/
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4 bg-dark text-white' >
        © 2023 Copyright: 
        <a className='text-reset fw-bold text-white' href='https://t.me/lottomatic/'>
          Matic Lotto
        </a>
      </div>
    </footer>
);

export default MyFooter;