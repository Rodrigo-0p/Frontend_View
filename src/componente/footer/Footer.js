import React, { memo } from 'react';
import Facebook        from "../../assets/icons/facebook.svg";
import twitter         from "../../assets/icons/twitter.svg";
import instagram       from "../../assets/icons/instagram.svg";

import "./Fooder.css";

const Footer = memo(() => {

  let rowValue = [
    {idref:"home"         , nameService:"home"         },
    {idref:"acerca"       , nameService:"Acerca de"    },
    {idref:"servicio"     , nameService:"Servicios"    },
    {idref:"precios"      , nameService:"Precios"      },
    {idref:"contacto"     , nameService:"Contacto"     },
   ]

  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__info-container">
        <div className="footer__info-content">
          <h4 className="footer__info-title">
            {process.env.REACT_APP_TITULO}
          </h4>
          <p className="footer__content-description">
            El componente principal de un buen corte
            es cuando se conoce al peluquero adecuado.
          </p>
          <ul className="footer__social-media">
            <li className="primary-btn-social social-media__item">
              <img src={Facebook} alt="facebook"/>
            </li>
            <li className="primary-btn-social social-media__item">
              <img src={twitter} alt="twitter" />
            </li>
            <li className="primary-btn-social social-media__item">
              <img src={instagram} alt="instagram" />
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="footer__copyright-container">
          <p className="copyright">
           {process.env.REACT_APP_TITULO} &copy; 2024. todos los derechos reservados.
          </p>
          
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              {
                rowValue.map((items)=>(
                  <li key={items.nameService} className='footer__nav-item'>
                    <a href={`#${items.idref}`} className="footer__nav-link">
                      {items.nameService}
                    </a>
                  </li>
                ))
              }
            </ul>
          </nav>

        </div>
      </div>

    </footer>     
  );
});

export default Footer;