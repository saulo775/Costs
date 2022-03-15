import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #EEEEEE;

        --gold: #C29E60;
        --red: #FF3C3C;
        --green: #33CC95;
        --black: #121212;


        --text-title: #252525;
        --text-body: #5a5a5a;

        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93,75%;
        }

        @media (max-width: 720px){
            font-size: 87,5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smooth: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Righteous', cursive;
        font-weight: 400;
    }

    ul, li {
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    h3, h4, h5, h6, p {
        font-family: 'Poppins', sans-serif;
    }

    a{
        text-decoration: none;
        color: currentColor;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    body::-webkit-scrollbar {
        width: 0.5rem;               /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
        background: var(--text-body);        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--gold);    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
    }
`;