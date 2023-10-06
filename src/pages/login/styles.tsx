import styled from "styled-components";

export const Continer = styled.div`
 background-color: #A4DADF;
 min-height: 100vh;
 display: flex;
 justify-content: center;
`

export const Content = styled.div`
    width: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    border-radius: 10px;
    margin: auto;
`

export const Input = styled.input`
    font-family: inherit;
    width: 100%;
    outline: none;
    background-color: #fff;
    border-radius: 4px;
    border: none;
    display: block;
    padding: 0.7rem 0;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 17px;
    color: #4A4A4A;
    text-indent: 10px;
    margin-bottom: 20px;
`

export const Logo = styled.img`
    max-width: 150px;
    margin-bottom: 30px;
`

export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    align-self: flex-start;
`

export const Button = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    background-color: rgba(51, 204, 170);
    color: #fff;
    padding: 0.8rem 0;
    border-radius: 4px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 17px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 30px;
`