import React, { memo }       from 'react';
// HEADER
import Header                from '../header/Header';
import MainAcercaDe          from '../mainAcercaDe/MainAcercaDe';
import MainServicios         from '../mainservicios/MainServicios';
import MainPrecios           from '../mainPrecios/MainPrecios';
import MainContacto          from '../mainContacto/MainContacto';
// FOOTER
import Fooder                from "../footer/Footer";
import { InstagramOutlined } from '@ant-design/icons';
import { FloatButton       } from 'antd';
import { BiLogoFacebook    } from "react-icons/bi";
import { FaXTwitter        } from "react-icons/fa6";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { GiBeard           } from "react-icons/gi";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";

const MainHome = memo(() => {

  const [rowRedes, setRedes ] = React.useState([])

  React.useEffect(()=>{
    getData()
  },[])

  const getData = async ()=>{
    let url = process.env.REACT_APP_DATA_URL+'CONFIGUR.txt';
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    try {
      xhr.onload = ()=> {
        if (xhr.status >= 200 && xhr.status < 300) {
          let data = JSON.parse(xhr.responseText);
          setRedes(data.detalle)
        }
      };
      xhr.send();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Header/>
      <MainAcercaDe/>
      <MainServicios/>
      <MainPrecios/>
      <MainContacto/>
    <Fooder/>
    
    <FloatButton.Group
      trigger="click"
      type="primary"
      className='HomeFloatButton'
      icon={<GiBeard />}
    >
    {
      rowRedes.map((items,indice)=>(
          items.cod_redes_sociales === 1 && items.activo === 'S'
        ? (<a key={indice} href={items.url} target="_blank" rel="noopener noreferrer">
            <FloatButton key={indice} icon={<BiLogoFacebook />} />
          </a>)        
        : items.cod_redes_sociales === 2 && items.activo === 'S'
        ? (<a key={indice} href={items.url} target="_blank" rel="noopener noreferrer">
            <FloatButton key={indice} icon={<InstagramOutlined />} />
          </a>)
        : items.cod_redes_sociales === 3 && items.activo === 'S'
        ? (<a key={indice} href={items.url} target="_blank" rel="noopener noreferrer">
            <FloatButton key={indice} icon={<FaXTwitter />} />
          </a>)         
        : items.cod_redes_sociales === 4 && items.activo === 'S'
        ? (<a key={indice} href={items.url}
             target="_blank" rel="noopener noreferrer">
            <FloatButton key={indice} icon={<AiOutlineWhatsApp />} />
          </a>)
        : null        
      ))
    }
    </FloatButton.Group>
    <FloatButton.BackTop
     className='HomeFloatBackTop'
     icon={<AiOutlineVerticalAlignTop />}      
    />
  </>
  );
});

export default MainHome;