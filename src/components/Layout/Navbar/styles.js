import styled from "styled-components"

export const Nav= styled.nav`
    background-color: #222;
    padding: 1rem;

    img {
        width: 4rem;
    }

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        align-items: center;
        
        li {
            color: #fff;
            text-decoration: none;
        }

        li a:hover {
            color: var(--primary);
        }
    }
`;
