import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Blacknav from "./components/Blacknav.jsx";
import SponsorTab from "./components/SponsorTab";
import ClaimTab from "./components/ClaimTab.jsx";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <div>
          <Navbar />
          <Blacknav />
          <Container fluid id="cont">
            <div className="row ">
              <div className="col-sm-2 sidebar">
                <Sidebar />
              </div>
              <div className="col-lg-10"></div>
            </div>
          </Container>
        </div>
      </Route>
      <Route path="/sponsors" exact>
        <div>
          <Navbar />
          <Blacknav />
          <Container fluid id="cont">
            <div className="row ">
              <div className="col-sm-2 sidebar">
                <Sidebar />
              </div>
              <div className="col-lg-10">
                <SponsorTab />
              </div>
            </div>
          </Container>
        </div>
      </Route>
      <Route path="/claim" exact>
        <div>
          <Navbar />
          <Blacknav />
          <Container fluid id="cont">
            <div className="row ">
              <div className="col-sm-2 sidebar">
                <Sidebar />
              </div>
              <div className="col-lg-10">
                <ClaimTab />
              </div>
            </div>
          </Container>
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
