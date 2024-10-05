import React, { memo }  from 'react';
import './MainAcercaDe.css';

const Body = memo(() => {

  React.useEffect(()=>{
    getData()    
  },[])

  const getData = async ()=>{
    let url = process.env.REACT_APP_DATA_URL+'ACERCADE.txt'
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);

    try {
      xhr.onload = ()=> {
        if (xhr.status >= 200 && xhr.status < 300) {
          let data = JSON.parse(xhr.responseText)
           document.getElementById('acercade-title').innerHTML      = data.titulo;
          document.getElementById('acercade-subtitle').innerHTML    = data.subtitulo;
          document.getElementById('acercade-descripcion').innerHTML = data.descripcion;
          let imagen = document.querySelector('.acercade__img');
          imagen.src = process.env.REACT_APP_IMAGE_URL+`acercade-img.${data.extencion_img}`;
        }else{
          document.getElementById('acercade-title').innerHTML       = '404';
          document.getElementById('acercade-subtitle').innerHTML    = '404';
          document.getElementById('acercade-descripcion').innerHTML = '404';
        }
      };
      xhr.send();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <section id="acerca" className="acercade">
        <div className="acercade__img-container">
          <div className="acercade__since-detail">
            <span className="since-detail__year">
              <em>desde</em> <br/> 2019
            </span>
          </div>
          <img 
            alt="afeitado de cliente barbero" 
            className="acercade__img"
          />
        </div>        
        <div className="acercade__details">
          <span id="acercade-title" className="tag" />
          <h2 id="acercade-subtitle" className="section__heading about__details-title">
          </h2>
          <p className="acercade__details-paragraph" id="acercade-descripcion" />
         </div>
      </section>
    </main>
  );
});

export default Body;