import React from 'react';
import { Header } from './containers/Header';
import HomePage from './components/HomePage';

import './style/style.scss';
import 'antd/dist/antd.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import RouterOutlet from './Routes/RouterOutlet';

function App() {

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      {/*<div className="container">*/}
      {/*    <HomePage/>*/}
      {/*</div>*/}
      {/*<div className="footer">*/}

      {/*</div>*/}
      <RouterOutlet />
    </div>
  );
}

export default App;
