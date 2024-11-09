import React, { memo }   from 'react';
import money             from "../../assets/img/money.png";
import promo             from "../../assets/img/promo.png";
import currency				   from "currency.js"

import './MainPrecios.css';

const MainPrecios = memo(() => {

  const [rowPrecios, setRowPrecios ] = React.useState([])


  React.useEffect(()=>{
    getData()    
  },[])
  const getData = async ()=>{
    let url = process.env.REACT_APP_DATA_URL+'PRECIOS.txt'
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);

    try {
      xhr.onload = ()=> {
        if (xhr.status >= 200 && xhr.status < 300) {
            let data          = JSON.parse(xhr.responseText)
            let imageUrl      = `${process.env.REACT_APP_IMAGE_URL}precios-img.${data.extencion_img}`;
            let imageUrlFondo = `${process.env.REACT_APP_IMAGE_URL}precios-fondo-img.${data.extencion_img_fon}`;
            
            setRowPrecios(data.detalle)
            document.getElementById('precios-empresa').innerHTML = data.nomb_empresa;
            document.getElementById('precios-title').innerHTML   = data.titulo;
            let imgElement       = document.querySelector('.precios__img');
            let imgElement_fondo = document.querySelector('.precios');
            imgElement.src       = imageUrl;
            imgElement_fondo.style.backgroundImage = `url('${imageUrlFondo}')`;
        } else {
          document.getElementById('precios-empresa').innerHTML = '404';
          document.getElementById('precios-title').innerHTML   = '404';
        }
      };
      xhr.send();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div id="precios" className='precios'>
      <div className="precios-container">
        <div className="precios-heading">
          <span id="precios-empresa" className="tag">{null}</span>         
          <h2 id="precios-title" className="section__heading prices-heading__title">{null}</h2>
        </div>

        <div className="precios__card-container">
          <div className="precios__card">
            <ul className="precios__card-list">
              {
                rowPrecios.map((items)=>(
                  <li key={items.titulo} className="precios__card-item">                    
                    <span className="precios__item-content">{items.titulo}</span><div className="precios__card-separator"></div>
                    <span className="precios__item-content">                      
                      <img alt='left' src={items.indpromo === 'S' ? promo : money} style={{paddingRight:'5px'}} width="23" />
                      {`GS. ${currency(items.precios ? items.precios : 0, { separator:'.',decimal:',',precision:0,symbol:''}).format()}`}
                    </span>
                </li>
                ))
              }
            </ul>            
          </div>
          <img alt="Nuestro peluquero cortando cabello" className="precios__img"/>
        </div>

      </div>
    </div>
  );
});

export default MainPrecios;