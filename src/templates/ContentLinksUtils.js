import { partColors } from "./partColors";
import colors from '../colors';

export const updateAllLinks = (props, state, frontmatter) => {
    state.links.map(i => {
        // going to fix some of the link colors here to be bolder for the white ones in the light theming
        var theme = document.documentElement.dataset.theme;
        var partColorName = partColors[frontmatter.part];
        var partColor = colors[partColorName + (state.isDark ? '-dark' : '')];
        var alternativePartColor = colors[partColorName + (state.isDark ? '' : '-alt')];
        var textColor = (i.parentNode.tagName === "STRONG") ? alternativePartColor : origColor;
        i.style = `border-color: ${alternativePartColor}`;
        var origColor = i.style.color;

        i.style.color = textColor;
        !i.classList.contains('language-switcher__language') &&
            (i.target = '_blank');

        function over() {
            i.style.color = (i.parentNode.tagName !== "STRONG") && theme !== 'light' ? '#ffffff' : origColor;
            i.style.backgroundColor = partColor;
        }
        function out() {
            i.style.backgroundColor = 'transparent';
            i.style.color = textColor;
        }

        i.onmouseover = over;
        i.onmouseleave = out;

        return null;
    });
}