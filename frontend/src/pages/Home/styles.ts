import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
`;

export const Product = styled.div`
    display: flex;
    margin: 1rem;
    border-color: #cacaca;
    border-style: solid;
    border-radius: 20px;
    border-width: 1px;
    text-decoration: none;
    color: black;
    
    img {
        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;
    }

    p {
        font-size: 1rem;
        text-decoration: none;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0.5rem;
`;