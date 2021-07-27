import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core';
import {orange,yellow,amber}from '@material-ui/core/colors';
import * as serviceworker from './serviceWorkerRegistration';
import {BrowserRouter as Router,Switch,Route,useParams,Redirect,withRouter,useHistory} from 'react-router-dom';


const theme=createTheme({
  palette: {
    primary: {main:'#62055f'},
    secondary:{ main:'#f688f7'},
  }
})

ReactDOM.render(
  
  <React.StrictMode>
   
  <ThemeProvider theme={theme}>
  <Router>
    <App />
    </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceworker.register();
reportWebVitals();

