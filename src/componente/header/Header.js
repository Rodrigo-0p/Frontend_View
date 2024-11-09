import React, { memo }  from 'react';
import menu_icons       from '../../assets/icons/menu-icon.svg'
import menu_close_icons from '../../assets/icons/menu-icon.svg'
import{ Link }          from 'react-router-dom';
import './Header.css';

const Header = memo(() => {

  let rowValue = [{idref:"acerca"    , nameService:"Acerca de"    },
                  {idref:"servicio"  , nameService:"Servicios"    },
                  {idref:"precios"   , nameService:"Precios"      },
                  {idref:"contacto"  , nameService:"Contacto"     }]
  

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
            let data = JSON.parse(xhr.responseText)
            document.getElementById('configur-title').innerHTML     = data.titulo;
            const headerElement = document.querySelector('.header');
            const imgUrl = process.env.REACT_APP_IMAGE_URL+'configur-img.jpg';
            headerElement.style.backgroundImage = `url('${imgUrl}')`;
        } else {
          document.getElementById('configur-title').innerHTML     = '404';
        }
      };
      xhr.send();
    } catch (error) {
      console.log(error)
    }
  }
  const opneMenu = ()=>{
    
    const navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('nav-container--open')
    
    const iconMenu = document.querySelector('.header__menu-icon');
    iconMenu.classList.toggle('header__menu-icon-rotate')

    const iconMenuClose = document.querySelector('.nav__close-icon');
    iconMenuClose.classList.remove('header__menu-icon-rotate')    
  }
  const closeMenu = ()=>{
    const navContainer = document.querySelector('.nav-container');
    navContainer.classList.remove('nav-container--open');

    const iconMenuClose = document.querySelector('.nav__close-icon');
    iconMenuClose.classList.toggle('header__menu-icon-rotate')
    

    const iconMenu = document.querySelector('.header__menu-icon');
    iconMenu.classList.remove('header__menu-icon-rotate')
  }

  return (
    <header id="home" className='header'>
      <div className="header__shadow">
        <div className="header__content">
          
          <div className="header__content-hero">
            
            <h1 className="header__title">
              <div className='header__title_menu'>
                <img src={ process.env.REACT_APP_IMAGE_URL+'logoEmpresa.jpg'}  className='header-menu-logo' alt="Menayo Barber"/>
                <a className='name_empresa_1' href="#home" >Menayo<div className='name_empresa_2'>Barber</div></a>                
              </div>
            </h1>
            
            <img src={menu_icons} alt="abrir menu" onClick={opneMenu} className="header__menu-icon"/>

            <div className="nav-container">
              <img src={menu_close_icons} alt="fechar menu" onClick={closeMenu} className="nav__close-icon"/>

              <nav className="header__nav">
                <ul className="header__nav-list">
                  {
                    rowValue.map((items)=>(
                      <li key={items.nameService} className='header__nav-item'>
                        <a href={`#${items.idref}`} onClick={closeMenu} className="header__nav-link">
                          <></>{items.nameService}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </nav>

            </div>

          </div>

          <div className='header__content-intro'>
            <h2 id="configur-title" className="content-intro__title"/>
            <a href="#servicio" className="primary-btn">
              Nuestros Servicio
            </a>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;