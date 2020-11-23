import React from "react";
import logo from './logo.svg';
import style from './app.module.scss';
import {GridRow} from "../../lib-ui";


function App() {
  return (
    <div>
      <header>
        <GridRow justify={"left"}>
        <svg>
          <use href={logo + "#logo"} xlinkHref={logo + "#logo"}/>
        </svg>
        <div>
          <p>Официальные дилеры</p>
        </div>
        </GridRow>
      </header>

    </div>
  );
}

export default App;
