import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 1rem 0;
        font-size: 2rem;

        span {
            background-color: var(--black);
            color: var(--primary);
            padding: 0.5rem;
        }
    }

    p {
        color: var(--text-body);
        margin-bottom: 1rem;
    }

    img {
        width: 22rem;
        margin: 2rem;
    }
`;