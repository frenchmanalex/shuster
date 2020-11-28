import React from "react";

const GridCol = ({
                     children,
                     width,
                     className,
                     ...rest
                 }) => {

    const css = [className];

    switch (width) {
        case 1:
            css.push();
            break;

    }

    return <div {...rest}>{children}</div>
};
