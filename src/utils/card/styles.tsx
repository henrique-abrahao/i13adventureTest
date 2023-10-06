import styled from "styled-components";

export const Card = styled.div`
    width: 400px;
    height: 120px;
    background-color: white;
    margin: 10px 0;
    display: flex;
    flex-direction: row;

    img {
        max-width: 80px;
        max-height: 80px;
        border-radius: 50%;
        margin: 16px;
        object-fit: cover;
    }

    .InformationPatients {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        justify-content: space-evenly;
    }
`