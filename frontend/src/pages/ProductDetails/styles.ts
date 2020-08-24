import styled from 'styled-components';


export const Content = styled.div`
    display: flex;
    padding: 5px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;

    h2, p {
        padding: 10px;
    }
`;

export const Button = styled.button`
    max-width: 6rem;
    padding: 5px;
    border-radius: 3px;
    border-style: none;
    background-color: #0275d8;
    color: #FFFFFF;
`;