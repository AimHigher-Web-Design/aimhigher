import styled from 'react-emotion';
import ReactSVG from 'react-svg';

export const Hero = styled('div')`
    color: ${props => props.theme.colours.primary.dark['75']};
    display: flex;
        align-items: center;
        justify-content: center;
    font: ${props => props.theme.fonts.headings};
    padding: 30px;

    blockquote {
        font-size: 1.5em;
    }
`;

export const HomeGraphic = styled(ReactSVG)`
    clip-path: polygon(-1.45% 54.49%, 15.93% 52.35%, 15.93% 37.43%, 13.06% 17.68%, 19.7% 6.29%, 47.78% 12.09%, 58.96% 14.68%, 64.77% 11.32%, 66.35% 6.2%, 72.78% 4.81%, 76.81% 9.19%, 81.82% 4.74%, 89.35% 8.51%, 91.72% 23.53%, 97.64% 35.66%, 91.71% 50.16%, 100% 51.58%, 99.54% 63.88%, 85.92% 64.44%, 82.08% 76.61%, 74.66% 90.14%, 75.1% 97.49%, 1.45% 97.8%, 1.7% 88.46%, 4.36% 85.83%);
    float: right;
    shape-outside: polygon(-1.45% 54.49%, 15.93% 52.35%, 15.93% 37.43%, 13.06% 17.68%, 19.7% 6.29%, 47.78% 12.09%, 58.96% 14.68%, 64.77% 11.32%, 66.35% 6.2%, 72.78% 4.81%, 76.81% 9.19%, 81.82% 4.74%, 89.35% 8.51%, 91.72% 23.53%, 97.64% 35.66%, 91.71% 50.16%, 100% 51.58%, 99.54% 63.88%, 85.92% 64.44%, 82.08% 76.61%, 74.66% 90.14%, 75.1% 97.49%, 1.45% 97.8%, 1.7% 88.46%, 4.36% 85.83%);
    width: 60%;
`;

export const HomeContent = styled('div')`
    font-size: 1.3em;
    margin: 0 auto;
    padding: 20px;
    width: 80%;
`;