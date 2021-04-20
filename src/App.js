
import Header from "./components/headers";
import Header1 from "./components/headers1";
import Footer from "./components/footer";
import Home from "./pages/Home";
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import SignInPage from"./pages/SignInPage";
import SignUpPage from"./pages/SignUpPage";
import SignUpPage2 from"./pages/SignUpPage2";
import SignUpPage3 from"./pages/SignUpPage3";

import Profil from"./pages/profil";
import Editpage from"./pages/editprofil";

import Forgotpassword from "./pages/forgotPassword";
import axios from "axios";
import './App.css';
import { AuthContextProvider } from "./components/testAuth";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <AuthContextProvider>
   <Router>
    <Header1/>
    <Header/>
 
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
          <Footer/>
        </Route>
        <Route path="/SignInPage" render={(props) =>  <SignInPage {...props} />}>
          
        </Route>
        <Route path="/SignUpPage" render={(props) =>  <SignUpPage {...props} />}>
         
        </Route>
        <Route path="/profil" render={(props) =>  <Profil {...props} />}>
         
        </Route>
        <Route path="/editpage" render={(props) =>  <Editpage {...props} />}>
         
         </Route>
         <Route path="/forg-password/:email" render={(props) =>  <Forgotpassword {...props} />}>
         
         </Route>
        <Route path="/SignUpPage2" render={(props) =>  <SignUpPage2 {...props} />}>
          
         
        </Route>
        <Route path="/SignUpPage3" render={(props) =>  <SignUpPage3 {...props} />}>
        
        </Route>
       
        <Redirect to="/" />
      </Switch>
    </main>
    
   </Router>
   </AuthContextProvider>
  );
}

export default App;
