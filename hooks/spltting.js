import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
// import Splitting from "splitting";
// import splittingClient  from "~/plugins/splitting.client";
function spaceHtml(target, whitespace) {
    const space = target.querySelectorAll('.whitespace');
    if (space.length && whitespace)
        space.forEach(item => item.outerHTML = ' ');
}

export const splittingChar = (target, whitespace = true) => {
    // const el = Splitting({target, whitespace: false})[0];
    // spaceHtml(target, whitespace);
    // return el;
}

export const splittingWords = (target, whitespace = true) => {
    // const el = Splitting({target, by: 'words'})[0];
    // spaceHtml(target, whitespace);

    // return el;
}

export const splittingLine = (target, whitespace = true) => {
    // const el = Splitting({target, by: 'lines'})[0];
    // spaceHtml(target, whitespace);
    // return el;
}

export const splittingItems = (target, matching = null) => {
    // return Splitting({target, by: 'items', matching});
}
export const splittingGrid = (target, matching = null) => {
    // return Splitting({target, by: 'grid', matching});
}

const dsnSplitting = {
    Char: splittingChar,
    Words: splittingWords,
    Lines: splittingLine,
    Items: splittingItems,
    Grid: splittingGrid,
}

export default dsnSplitting;