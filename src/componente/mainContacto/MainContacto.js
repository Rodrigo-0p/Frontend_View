import React from 'react';
import icon_local from '../../assets/icons/location-pin.svg'
import icon_email from '../../assets/icons/email.svg'
import icon_telef from '../../assets/icons/phone.svg'
import './MainContacto.css'

const MainContacto = () => {
  let longitud = ''
  let latitud  = ''
  React.useEffect(()=>{
    latitud  = '-57.48501785942481';
    longitud = '-25.3918956396908';
  })

  return (
    <section id="contacto" className='contacto'>
      <div className="contacto-details">
      <span className="tag">{process.env.REACT_APP_TITULO}</span>
        <h3 className="section__heading contact-details__title">
          Contacto
        </h3>
        <ul className="contacto-details__list">
          <li className="contacto-details__item">
            <img 
              src={icon_local} 
              alt="ícone de localizacion" 
              className="primary-btn-contacto contacto-details__icon"
            />
            {/*<address>
               ubicacion 
            </address>*/}
          </li>
          <li className="contacto-details__item">
            <img 
              src={icon_email} 
              alt="ícone de email" 
              className="primary-btn-contacto contacto-details__icon"
             />
            <a href="./" className="contacto-details__link">
              {/* link de la pagina */}
            </a>
          </li>
          <li className="contacto-details__item">
            <img 
              src={icon_telef}
              alt="ícone de telefono" 
              className="primary-btn-contacto contacto-details__icon"
             />
            <a href="./" className="contacto-details__link">
              {/* whatsapp */}
            </a>
          </li>
        </ul>
      </div>
       {
       // eslint-disable-next-line 
      <iframe 
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.7165606335851!2d${longitud}!3d${latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945dad524224743d%3A0x4f004df59edc8414!2sJM%20SPORTS!5e1!3m2!1ses!2spy!4v1706475285295!5m2!1ses!2spy`}
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="contacto__map"/>
      }
    </section>
    // 
  );
};

export default MainContacto;