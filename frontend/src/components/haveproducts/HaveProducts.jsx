import React from "react";
import BlackNavBar from "../blacknavbar/BlackNavBar";
import MyPorducts from "./myproducts/MyPorducts";
import { AddProduct } from "./addproduct/AddProduct";
import { MyProductDetails } from "./myproductdetails/MyProductDetails";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./HaveProducts.css";

const HaveProducts = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <BlackNavBar />
      <Switch>
        <Route path={path} component={MyPorducts} exact />
        <Route path={`${url}/addproduct`} component={AddProduct} exact />
        <Route path={`${url}/details/:id`} component={MyProductDetails} exact />
      </Switch>
    </>
  );
};

export default HaveProducts;
