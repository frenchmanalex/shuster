import React from "react";
import s from './page-home.module.scss'
import {GridRow} from "../../lib-ui";

const Homepage = () => {
    return <div>
        <GridRow className={s.firstBlock}>
            <h1 className={s.title}>SHUSTER</h1>
        </GridRow>
        <div className={s.secondBlock}>
            <GridRow>
                <div>
                    <h2>Велосипеды</h2>
                    <button>Подробнее</button>
                </div>
                <div>
                    <img src={require('../../media/shusterL78688.jpg').default} alt={""}/>
                </div>
            </GridRow>

        </div>
    </div>;
};

export default Homepage;
