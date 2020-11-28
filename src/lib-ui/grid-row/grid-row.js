import {buildStyle} from "../settings/settings";
import React from "react";
import s from "./grid-row.module.scss";


const GridRow = ({
                     children,
                     className,
                     justify,
                     alignItems,
                     spacing,
                     column = false,
                     ...rest
                 }) => {

    let css = [className, s.all];

    switch(justify) {
        case "left":
            css.push(s.justify_left);
            break;
        case "right":
            css.push(s.justify_right);
            break;
        case "between":
            css.push(s.justify_between);
            break;
        case "center":
            css.push(s.justify_center);
            break;
        default:
            css.push(s.justify_around);
            break;
    }
    switch (alignItems) {
        case "top":
            css.push(s.align_top);
            break;
        case "bottom":
            css.push(s.align_bottom);
            break;
        case "stretch":
            css.push(s.align_stretch);
            break;
        default:
            css.push(s.align_middle);
            break;
    }
    if (column) {
        css.push(s.column);
    }

    return <div {...rest} className={buildStyle(css)}>
        {children}
    </div>
};

export default GridRow;
