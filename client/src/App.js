import React from 'react';
import { Header } from './components/Header';
import RouterOutlet from './Routes/RouterOutlet';

import './style/style.scss';

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
