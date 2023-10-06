import styled from "styled-components";

export const Icon = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    right: -75px;

    &:hover {
        cursor: pointer;
        background-color: rgb(5, 68, 104);

        svg{
            color: white;
        }
    }

` 
export const Content = styled.div`
    margin-left: 20%;
    display: flex;
    flex-direction: column;
    position: relative;
`