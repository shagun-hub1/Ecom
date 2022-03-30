import App from "./App";
import ReactDOM  from "react-dom";
import './index.css'
import store from './store'
import AlertTemplate from 'react-alert-template-basic'
import {positions,transitions,Provider as AlertProvider} from 'react-alert'
import {Provider} from 'react-redux'
 

const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transition: transitions.SCALE,
  };
  
ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate}{...options}>
             
               <App/>,
            
        </AlertProvider>
    </Provider>,
    document.getElementById("root")
)