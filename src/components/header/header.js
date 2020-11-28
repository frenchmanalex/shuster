import React from "react";
import s from "./header.module.scss";
import {GridRow} from "../../lib-ui";
import logo from "./logo.svg";
import Menu from "./menu";


const Header = () => {
    return <header>
        <GridRow className={s.bg} justify={"between"}>
            <svg className={s.logo}>
                <use href={logo + "#logo"} xlinkHref={logo + "#logo"}/>
            </svg>
            <div>
                <p>Официальные дилеры</p>
            </div>
        </GridRow>
        <GridRow justify={"left"}>
            <Menu/>
        </GridRow>
    </header>
};

export default Header;
