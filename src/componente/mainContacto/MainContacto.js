import React from 'react';
import icon_local from '../../assets/icons/location-pin.svg'
import icon_email from '../../assets/icons/email.svg'
import icon_telef from '../../assets/icons/phone.svg'
import './MainContacto.css'

const MainContacto = () => {
  const [latitud , setLatitud ] = React.useState(null);
  const [longitud, setLongitud] = React.useState(null);
  const zoom = 16;
  React.useEffect(()=>{
    getData();
    // latitud  = '-57.48501785942481';
    // longitud = '-25.3918956396908';
  });
  const getData = async () => {
    let url = process.env.REACT_APP_DATA_URL+'EMPRESA.txt'
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    try {
      xhr.onload = ()=> {
        if (xhr.status >= 200 && xhr.status < 300) {
          let data = JSON.parse(xhr.responseText)
          document.getElementById('contacto-titulo-empresa').innerHTML = data.empresa;
          document.getElementById('contacto-direccion').innerHTML      = data.direccion;
          document.getElementById('contacto-correo').innerHTML         = data.correo;
          document.getElementById('contacto-telefono').innerHTML       = data.telefono;
          setLatitud(data.latitud);
          setLongitud(data.longitud);
        }else{
          document.getElementById('name_empresa_1').innerHTML  = '404';
          document.getElementById('name_empresa_2').innerHTML  = '404';
        }
      };
      xhr.send();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section id="contacto" className='contacto'>
      <div className="contacto-details">
      <span className="tag" id="contacto-titulo-empresa"></span>
        <h3 className="section__heading contact-details__title">
          Contacto
        </h3>
        <ul className="contacto-details__list">
          <li className="contacto-details__item">
            <img src={icon_local} alt="ícone de localizacion" className="primary-btn-contacto contacto-details__icon"/>
            <div id="contacto-direccion" className="contacto-details__link"/>
            {/*<address>
               ubicacion 
            </address>*/}
          </li>
          <li className="contacto-details__item">
            <img src={icon_email} alt="ícone de email" className="primary-btn-contacto contacto-details__icon"/>
            <div id="contacto-correo"className="contacto-details__link" />

          </li>
          <li className="contacto-details__item">
            <img src={icon_telef} alt="ícone de telefono" className="primary-btn-contacto contacto-details__icon"/>
            <div id="contacto-telefono" className="contacto-details__link"/>
            
          </li>
        </ul>
      </div>
       {
       // eslint-disable-next-line 
       <iframe
       loading="lazy"
       src={`https://www.google.com/maps?q=${latitud},${longitud}&z=${zoom}&output=embed`}
       allowFullScreen={true}
       referrerPolicy="no-referrer-when-downgrade"
       title='google map'
       className="contacto__map"
     />
   }
    </section>
    // 
  );
};

export default MainContacto;