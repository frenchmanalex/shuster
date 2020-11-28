export const buildStyle = (CSS) => {
    let cssString = "";
    CSS.forEach((e) => {
        if (e) {
            cssString += ` ${e}`;
        }
    });
    return cssString.trim();
};
