
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
import DisplayAllUsers from"./pages/displayAllUsers";
import Profil from"./pages/profil";
import Editpage from"./pages/editprofil";
import UserRequest from "./pages/userRequest";
import UserRequestDetails from "./pages/UserRequestDetails";
import Forgotpassword from "./pages/forgotPassword";
import OtherUsersProfil from"./pages/otherUsersProfil";
import QrCode from"./pages/QrCode";
import ajouterOffre from"./pages/ajouterOffre";

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
        <Route path="/allusers" render={(props) =>  < DisplayAllUsers {...props} />}>
        
        </Route>
        <Route path="/userRequest" render={(props) =>  < UserRequest {...props} />}>
        
        </Route>
        <Route path="/userRequestDetails" render={(props) =>  < UserRequestDetails {...props} />}>
        
        </Route>
        <Route path="/qrcode" render={(props) =>  < QrCode {...props} />}>
        
        </Route>
        <Route path="/otherprofil" render={(props) =>  < OtherUsersProfil {...props} />}>
        
        </Route>
        <Route path="/ajouterOffre" render={(props) =>  < ajouterOffre {...props} />}>
        
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
    
   </Router>
   </AuthContextProvider>
  );
}

export default App;
