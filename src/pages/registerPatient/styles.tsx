import styled from "styled-components";

export const Content = styled.div`
    margin-left: 20%;
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 16px;
    margin-top: 25px;

    input {
        background: #fff;
        border: 1px solid #9c9c9c;
    }
    button {
        background-color: #10558d;
        padding: 0.7em;
        width: 100%;
        border: 0;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }
    label {
        padding: 0.5em 0.5em 0.5em 0;
    }

    input {
        padding: 0.7em;
        margin-bottom: 0.5rem;
        border-radius: 5px;
    }

    input:focus {
        outline: 1px solid black;
    }
      
    label {
    grid-column: 1 / 2;
    }
    input,
    button {
        grid-column: 2 / 3;
    }
`