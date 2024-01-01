import colors from '../colors';
import { partColors } from "./partColors";

export const updateLinks = (props) => {
    const links = Array.from(
        document.querySelectorAll('a:not(.skip-to-content')
    );
    const { frontmatter } = props.data.markdownRemark;

    links.map(i => {
        // going to fix some of the link colors here to be bolder for the white ones in the light theming
        var theme = document.documentElement.dataset.theme;
        var partColorName = partColors[frontmatter.part];
        var partColor = colors[partColorName + (theme === 'light' ? '' : '-dark')];
        var alternativePartColor = colors[partColorName + (theme === 'light' ? '-alt' : '')];
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
