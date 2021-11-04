import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const AppContainer = () => (
  <BrowserRouter>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
