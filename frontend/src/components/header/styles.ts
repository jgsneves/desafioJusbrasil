import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    max-width: 100vw;
`;

export const Menu = styled.div`
    display: flex;
`;

export const ShoppingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.5rem;
    position: relative;

    p {
        font-style: italic;
        font-weight: bold;
        font-size: 0.7rem;
        color: black;
        text-decoration: none;
    }
`;

export const RedDot = styled.div`
    background-color: red;
    height: 1rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    width: auto;
    border-radius: 200px;
    position: absolute;
    top: -0.6rem;
    left: 3.5rem;
    font-style: bold;
    font-size: 0.7rem;
    color: #FFFFFF;
`;

export const UserDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.5rem;
    p {
        font-style: italic;
        font-weight: bold;
        font-size: 0.7rem;
    }    
`;
