import styled from "styled-components";

export const SideBar = styled.div`
    background-color: rgb(5, 68, 104);
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    min-width: 230px;
    height: 100%;
    padding: 20px 0;
    z-index: 9;
`

export const Profile = styled.div`
    margin-bottom: 30px;
    text-align: center;

    img {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 auto;
        object-fit: cover;
    } 

    h3 {
        color: #ffffff;
        margin: 10px 0 5px;
    }

    p {
        color: rgb(206, 240, 253);
        font-size: 14px;
    }
`

export const Menu = styled.ul`
        display: block;
        padding: 0;
        font-size: 16px;
        position: relative;
        
        li{
            display: block;
            padding: 1px 30px;
            color: white;
            font-size: 16px;
            position: relative;
            
        }
        :hover {
            background-color: white;
            color: #10558d;
            cursor: pointer;
        }

        svg {
           width: 18px;
           margin-right: 10px;
        }
        
`