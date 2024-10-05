import React, { memo } from 'react';
// HEADER
import Header          from '../header/Header';
import MainAcercaDe    from "../mainAcercaDe/MainAcercaDe"  ;
import MainServicios   from "../mainservicios/MainServicios";
import MainPrecios     from "../mainPrecios/MainPrecios"    ;
import MainContacto    from "../mainContacto/MainContacto"  ;
// FOOTER
import Fooder          from "../footer/Footer";


import {  InstagramOutlined, 
  TwitterOutlined  } from '@ant-design/icons';

import { FloatButton       } from 'antd';
import { BiLogoFacebook    } from "react-icons/bi";
import { FaAddressBook     } from "react-icons/fa6";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { GiBeard           } from "react-icons/gi";


const MainHome = memo(() => {
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
      style={{ right: 22 }}
      icon={<GiBeard />}
    >

    <FloatButton icon={<BiLogoFacebook    />} />
    <FloatButton icon={<TwitterOutlined   />} />
    <FloatButton icon={<InstagramOutlined />} />
    <FloatButton icon={<AiOutlineWhatsApp />} />
    <FloatButton icon={<FaAddressBook     />} />
     
    </FloatButton.Group>
  </>
  );
});

export default MainHome;