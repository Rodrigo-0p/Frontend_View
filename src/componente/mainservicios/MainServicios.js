import React, { memo } from 'react';
import './MainServicios.css';
import { Carousel } from 'antd';

const MainServicios = memo(() => {
  const [rowServicio, setRowServicio ] = React.useState([])
  React.useEffect(()=>{
    getData()    
  },[])

  const getData = async ()=>{
    let url = process.env.REACT_APP_DATA_URL+'SERVICIO.txt';
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    try {
      xhr.onload = ()=> {
        if (xhr.status >= 200 && xhr.status < 300) {
            let data = JSON.parse(xhr.responseText)
            setRowServicio(data.detalle)
            document.getElementById('servicio-empresa').innerHTML     = data.nomb_empresa;
            document.getElementById('servicio-title').innerHTML       = data.titulo;
            document.getElementById('servicio-descripcion').innerHTML = data.descripcion;
            let servicioElement = document.querySelector('.servicio');
            let imageUrl = `${process.env.REACT_APP_IMAGE_URL}servicio-img.${data.extencion_img}`;
            servicioElement.style.backgroundImage = `url('${imageUrl}')`; 
        } else {
          document.getElementById('servicio-empresa').innerHTML     = '404';
          document.getElementById('servicio-title').innerHTML       = '404';
          document.getElementById('servicio-descripcion').innerHTML = '404';
        }
      };
      xhr.send();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <section id="servicio" className="servicio">
      <div className="servicio-hero">
        <span id="servicio-empresa" className="tag"/>
        <h3 id="servicio-title" className="section__heading services__title">
        </h3>
        <p id="servicio-descripcion" className="servicio-hero__description">
        </p>
        <a href="#contacto" className="primary-btn">
          Entra en Contato
        </a>
      </div>

      <div className="servicio-content">
        <Carousel autoplay autoplaySpeed={3000} >
          {             
            rowServicio.map((items,indice)=>(
              <div key={indice} className='servicio__item-content' >
                <div className="servicio__item">
                  <h4 className="servicio__item-title">{items.titulo}</h4> 
                  <p className="servicio__item-description">{items.descripcion}</p>
                </div>
              </div>                    
              
            ))
          }
        </Carousel>
        
       </div>
    </section>
  </>
  );
});

export default MainServicios;