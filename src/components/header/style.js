import styled from 'react-emotion';
import { NavLink } from 'react-router-dom';

export const LogoArea = styled('a')`    
    svg {
        display: block;
        height: auto;
            max-height: 15vh;
        margin: 0 auto;
        padding: 20px;
        width: 32vw;
    }
`;


export const Nav = styled('nav')`
    display: flex;
        justify-content: space-between;
    padding: 40px 20px 10px;
`;

export const Item = styled(NavLink)`
    border-bottom: 3px solid transparent;
    border-right: 2px solid ${props => props.theme.colours.primary.dark['90']};
    color: #ffffff;
    font: ${props => props.theme.fonts.headings};
    font-size: 1.1em;
    font-weight: 500;
    padding: 2px 10px;
    text-decoration: none;

    &:first-child {
        border-left: 2px solid ${props => props.theme.colours.primary.dark['90']};
    }

    &:active, &:hover, &:focus {
        border-bottom-color: ${props => props.theme.colours.secondary.dark['90']};
        color: ${props => props.theme.colours.primary.dark['90']};
    }
`;