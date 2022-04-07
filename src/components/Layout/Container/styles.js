import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: ${props => props.start ? "flex-start": "space-between"};
    flex-direction: ${props=> props.column ? "column" : "row"};
    margin: 0 auto;
    flex-wrap: wrap;
    max-width: 67.5rem;
    
    min-height: ${props => props.min_heigth ? 70: 0}vh;
    `;