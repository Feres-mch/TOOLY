import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./listComponents/Navbar";
import Productcard from "./listComponents/Card.jsx";
import Sidebar from "./listComponents/Sidebar.jsx";
import { Container } from "react-bootstrap";
import "./App.css";
import Blacknav from "./listComponents/Blacknav.jsx";
import Productdetails from "./components/Productdetails";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <div>
          <Navbar />
          <Blacknav />

          <Container fluid className="cont">
            <div className="row">
              <div className="col-sm-2 sidebar">
                <Sidebar />
              </div>

              <div className="col-lg-10">
                <Container>
                  <div className="row">
                    <div className="col-sm-6 col-md-4">
                      <Productcard />
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <Productcard />
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <Productcard />
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <Productcard />
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <Productcard />
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <Productcard />
                    </div>
                  </div>
                </Container>
                <nav aria-label="...">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link">Previous</a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1 <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="page-item ">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Container>
        </div>
      </Route>
      <Route path="/details" component={Productdetails} exact></Route>
    </BrowserRouter>
  );
}

export default App;
