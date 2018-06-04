import { injectGlobal } from 'emotion'

injectGlobal`
    * {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    @font-face {
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/SpaceMono-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Space Mono';
        font-style: italic;
        font-weight: 400;
        src: url('../fonts/SpaceMono-Italic.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 700;
        src: url('../fonts/SpaceMono-Bold.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Space Mono';
        font-style: italic;
        font-weight: 700;
        src: url('../fonts/SpaceMono-BoldItalic.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 100;
        src: url('../fonts/Roboto-Thin.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 100;
        src: url('../fonts/Roboto-ThinItalic.ttf') format('truetype');

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        src: url('../fonts/Roboto-Light.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 300;
        src: url('../fonts/Roboto-Light.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/Roboto-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        src: url('../fonts/Roboto-Italic.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        src: url('../fonts/Roboto-Medium.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 500;
        src: url('../fonts/Roboto-MediumItalic.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        src: url('../fonts/Roboto-Bold.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 700;
        src: url('../fonts/Roboto-BoldItalic.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        src: url('../fonts/Roboto-Black.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 900;
        src: url('../fonts/Roboto-BlackItalic.ttf') format('truetype');
    }
`