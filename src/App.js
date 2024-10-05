import React              from 'react';
import AppRouter          from "./router/AppRouter";
import { ConfigProvider } from 'antd';
import './styles/global.css';

const App = () => {

  return (  
    <ConfigProvider theme={{ hashed: false }}>
      <AppRouter />
    </ConfigProvider>
    );

};

export default App;