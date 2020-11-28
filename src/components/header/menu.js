import React, {useState} from "react";
import {GridRow} from "../../lib-ui";
import s from './menu.module.scss';
import navLink from "../../navigation";
import {NavLink} from "react-router-dom";

const Menu = () => {
    const [isMenuOpen, toggleMenu] = useState(false);
    return <div className={s.wrapper}>
        <p onClick={() => toggleMenu(!isMenuOpen)}>Menu</p>
        {isMenuOpen && <MenuItems closeMenu={() => toggleMenu(false)}/>}
    </div>
};


export default Menu;

const MenuItems = ({closeMenu}) => {
    const [isMenuOpen, toggleMenu] = useState(false);

    const menuItems = [
        {
            name: "Главная",
            link: navLink.homepage
        },
        {
            name: "Продукция",
            children: [
                {name: "Велосипеды", link: navLink.productsBikes},
                {name: "Одежда", link: navLink.productsCloths},
                {name: "Обувь", link: navLink.productsShoes},
            ]
        },
        {
            name: "Контакты",
            link: navLink.contacts
        },
    ];

    return (
        <GridRow column alignItems={"stretch"} className={s.items}>
            {menuItems.map((el, elKey) => {
                    if (el.children) {
                        return <>
                            <div key={elKey} onClick={() => toggleMenu(!isMenuOpen)} className={s.item}>
                                <p>{el.name}</p>
                            </div>
                            {isMenuOpen && <div className={s.subItems}>
                                {el.children.map((child, childKey) => {
                                        return <NavLink to={child.link} onClick={closeMenu}>
                                            <div key={childKey} className={s.subItem}>{child.name}</div>
                                        </NavLink>
                                    }
                                )}
                            </div>}
                        </>

                    } else {
                        return <NavLink to={el.link}>
                            <div key={elKey} onClick={closeMenu} className={s.item}><p>{el.name}</p></div>
                        </NavLink>;
                    }
                }
            )}
        </GridRow>)
};
