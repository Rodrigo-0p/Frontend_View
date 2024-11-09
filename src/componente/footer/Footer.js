import React, { memo } from 'react';
import Facebook        from "../../assets/icons/facebook.svg";
import twitter         from "../../assets/icons/twitterx.svg";
import instagram       from "../../assets/icons/instagram.svg";
import whatsapp        from "../../assets/icons/whatsapp.svg";

import "./Fooder.css";

const Footer = memo(() => {

  let rowValue = [
    {idref:"home"         , nameService:"home"         },
    {idref:"acerca"       , nameService:"Acerca de"    },
    {idref:"servicio"     , nameService:"Servicios"    },
    {idref:"precios"      , nameService:"Precios"      },
    {idref:"contacto"     , nameService:"Contacto"     },
   ]

   const [rowRedes, setRedes ] = React.useState([])

   React.useEffect(()=>{
     getData()
     cargaDatos()
   },[])
 
   const getData = async ()=>{
     let url = process.env.REACT_APP_DATA_URL+'CONFIGUR.txt';
     var xhr = new XMLHttpRequest();
     xhr.open('GET',url,true);
     try {
       xhr.onload = ()=> {
         if (xhr.status >= 200 && xhr.status < 300) {
            let data = JSON.parse(xhr.responseText)
            setRedes(data.detalle)
         }
       };
       xhr.send();
     } catch (error) {
       console.log(error)
     }
  }
  const cargaDatos = async () => {
    let url = process.env.REACT_APP_DATA_URL+'EMPRESA.txt'
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    try {
      xhr.onload = ()=> {
        if (xhr.status >= 200 && xhr.status < 300) {
          let data = JSON.parse(xhr.responseText)
        document.getElementById('empresa').innerHTML = data.empresa;
        document.getElementById('empresab').innerHTML = data.empresa + " @  2024. todos los derechos reservados. ";
        document.getElementById('descripcion').innerHTML = data.descripcion;
        }else{
          document.getElementById('empresa').innerHTML  = '404';
          document.getElementById('descripcion').innerHTML  = '404';
        }
      };
      xhr.send();
    } catch (error) {
      console.log(error)
    }
  };
 

  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__info-container">
        <div className="footer__info-content">
          <h4 className="footer__info-title" id='empresa'>
            {/* {process.env.REACT_APP_TITULO} */}
          </h4>
          <p className="footer__content-description" id='descripcion'>
            {/* El componente principal de un buen corte
            es cuando se conoce al peluquero adecuado. */}
          </p>
          <ul className="footer__social-media">
          {
            rowRedes.map((items,indice)=>(
                items.cod_redes_sociales === 1 && items.activo === 'S'
              ? 
                ( <li key={indice} className="primary-btn-social social-media__item">
                    <a href={items.url} target="_blank" rel="noopener noreferrer">
                      <img src={Facebook} alt="facebook"/>
                    </a>
                  </li>                  
                )
              : items.cod_redes_sociales === 2 && items.activo === 'S'
              ? 
                ( <li key={indice} className="primary-btn-social social-media__item">
                    <a href={items.url} target="_blank" rel="noopener noreferrer">
                      <img src={instagram} alt="instagram"/>
                    </a>
                  </li>       
                )
              : items.cod_redes_sociales === 3 && items.activo === 'S'
              ? 
                ( <li key={indice} className="primary-btn-social social-media__item">
                    <a href={items.url} target="_blank" rel="noopener noreferrer">
                      <img src={twitter}   alt="twitter" />
                    </a>
                  </li>
                )
              : items.cod_redes_sociales === 4 && items.activo === 'S'
              ? 
                ( <li key={indice} className="primary-btn-social social-media__item">
                    <a href={items.url} target="_blank" rel="noopener noreferrer">
                      <img src={whatsapp}  alt="whatsapp"/>
                    </a>
                  </li>
                )
              : null
            ))
          }
          </ul>
        </div>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="footer__copyright-container">
          <p className="copyright" id='empresab'>&copy; 2024. todos los derechos reservados.</p>
          
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