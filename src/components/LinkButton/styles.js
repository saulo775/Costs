import { Link } from "react-router-dom";
import styled from "styled-components";


export const Button = styled(Link)`
    background-color: var(--black);
    color: #FFFFFF;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: 500ms;
    font-size: 1.25rem;

    :hover{
        color: var(--primary);
    }
`;