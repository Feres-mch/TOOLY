
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
import ProfilPage from"./pages/profilPage";

import './App.css';
const App = () => {
  return (
   <Router>
    <Header1/>
    <Header/>
 
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
          <Footer/>
        </Route>
        <Route path="/SignInPage" exact>
          <SignInPage/>
        </Route>
        <Route path="/SignUpPage" render={(props) =>  <SignUpPage {...props} />}>
         
        </Route>
        <Route path="/profil" ender={(props) =>  <ProfilPage {...props} />}>
      
        </Route>
        <Route path="/SignUpPage2" render={(props) =>  <SignUpPage2 {...props} />}>
          
         
        </Route>
        <Route path="/SignUpPage3" render={(props) =>  <SignUpPage3 {...props} />}>
        
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
    
   </Router>
  );
}

export default App;
/*function App() {
  return (
    <>
      <Header></Header>
      
      <AppFrame className="App">
        <BrowserRouter basename="/">
          <Switch>
           
            <Route
              path="/signinpage"
              render={(props) => <SignInPage  />}
            ></Route>
             <Route
              path="/signUppage"
              render={(props) => <SignUpPage  />}
            ></Route>
           <Route
              path="/"
              render={(props) => <Home  />}
            ></Route>
            <Route exact render={() => <p>Default rendered page!</p>}></Route>
          </Switch>
        </BrowserRouter>
      </AppFrame>
    </>
  );
}

const AppFrame = styled.div`
text-align: center;
display: flex;
flex-direction: column;
`;
export default App;
*/