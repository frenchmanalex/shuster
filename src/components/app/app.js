import React from "react";
import Header from "../header/header";
import {Redirect, Route, Switch} from "react-router-dom";
import navLink from "../../navigation";
import Homepage from "../page-home/page-home";
import Footer from "../footer/footer";


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path={navLink.homepage}>
          <Homepage/>
        </Route>
        <Route path={navLink.productsBikes} exact>
          <p>products Bikes !!</p>
        </Route>
        <Route path={navLink.productsCloths} exact>
          <p>products Cloths !!</p>
        </Route>
        <Route path={navLink.productsShoes} exact>
          <p>products SHOES!!</p>
        </Route>
        <Route path={navLink.contacts} exact>
          <p>contacts !!</p>
        </Route>
        <Route exact path={navLink.error404}><p>error</p></Route>
        <Redirect to={navLink.error404}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
