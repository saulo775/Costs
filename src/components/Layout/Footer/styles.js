import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: var(--black);
    color: #fff;
    padding: 1.75rem;
    text-align: center;

    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        gap: 2rem;

        li:hover  {
            color: var(--primary);
        }

        svg {
            font-size: 1.5rem;
            cursor: pointer;
        }

    }

    p {
        margin-top: 0.75rem;

        span {
            font-weight: bold;
            color: var(--primary);
        }
    }
`;