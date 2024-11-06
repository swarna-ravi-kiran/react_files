import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { CustomerProvider } from './Components/contextapi/ContextApi';
import { CustomCredentialProvider } from './Components/login-logout-task/CredentialContext';

ReactDOM.render(<CustomCredentialProvider><App /></CustomCredentialProvider>, document.getElementById("root"));

