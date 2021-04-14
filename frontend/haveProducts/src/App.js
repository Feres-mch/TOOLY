import { NavBar } from "./components/Utils/NavBar";
import { Blacknav } from "./components/Utils/Blacknav";
import ProductHave from "./components/Products/ProductHave";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductAdd from "./components/Products/ProductAdd";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Blacknav />
      <Switch>
        <Route path="/" component={ProductHave} exact />
        <Route path="/add" component={ProductAdd} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
