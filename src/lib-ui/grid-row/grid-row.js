import {buildStyle} from "../settings/settings";
import React from "react";
import s from "./grid-row.module.scss";


const GridRow = ({children, className, justify, align, spacing, ...rest}) => {

    let justifyCSS, alignCSS, spacingCSS;

    switch(justify) {
        case "left":
            justifyCSS = s.justify_left;
            break;
        case "right":
            justifyCSS = s.justify_right;
            break;
        case "between":
            justifyCSS = s.justify_between;
            break;
        case "center":
            justifyCSS = s.justify_center;
            break;
        default:
            justifyCSS = s.justify_around;
            break;
    }
    switch(align) {
        case "top":
            alignCSS = s.align_top;
            break;
        case "bottom":
            alignCSS = s.align_bottom;
            break;
        case "stretch":
            alignCSS = s.align_stretch;
            break;
        default:
            alignCSS = s.align_middle;
            break;
    }
    if (spacing % 2 === 0) {
        spacingCSS = " grid-col-spacing-" + spacing;
    }

    let style = [s.all, justifyCSS, alignCSS, spacingCSS];

    console.log(buildStyle(style, className));

    return <div {...rest} className={buildStyle(style, className)}>
        {children}
    </div>
};

export default GridRow;