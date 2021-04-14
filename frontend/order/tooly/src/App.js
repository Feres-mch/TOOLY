
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

import {AddressForm} from './checkout/AddressForm';
import {DeliveryMode} from './checkout/DeliveryMode';
import {PayementForm }from './checkout/PayementForm';
import {Checkout} from './checkout/Checkout';
import {ProductDetail} from './ProductDetail';



function App() {
  return (
    <Router>
       
      <Switch>
          <Route path="/" component={ProductDetail} exact>
          
          </Route>
          <Route path="/Adresse" component={AddressForm} exact>
          
          </Route>
          <Route path="/delivery" component={DeliveryMode}>
            
          </Route>
          <Route path="/payement" component={PayementForm }>
            
          </Route>
          
          <Route path="/checkout" component={Checkout}>
            
          </Route>
          
        </Switch>

    </Router>
  );
}

export default App;
