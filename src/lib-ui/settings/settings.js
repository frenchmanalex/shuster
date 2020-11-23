export const buildStyle = (CSS, className) => {
    let cssString;
    CSS.forEach((e) => {
        if (e) {
            cssString = `${cssString} ${e}`;
        }
    });
    if (className) {
        cssString = `${cssString} ${className}`;
    }
    return cssString.trim();
};