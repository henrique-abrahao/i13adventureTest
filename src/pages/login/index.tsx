import React, {useState} from  'react'
import * as s from './styles';
import { useNavigate } from 'react-router-dom'
import { dataUsers } from "../../mock/user"

export default function Login() {
    const [valueEmail, setValueEmail] = useState('');
    const [isValidade, setIsValidade] = useState(true)

    const handleClick = (user:string) => {
        const filterUser = dataUsers.filter(item => item.email === user);

        if(!filterUser.length){
            setIsValidade(false)
            return;
        };
        navigate('home')
    }

    const navigate = useNavigate()

    return(
            <s.Continer>
                <s.Content>
                    <s.Logo src="https://static.vecteezy.com/system/resources/thumbnails/023/654/784/small/golden-logo-template-free-png.png" alt="logo" />
                    <s.Input onChange={(e) => setValueEmail(e.target.value)} placeholder='Email Address'/>
                    <s.Input placeholder='Password' type='password'/>
                    {
                        !isValidade ?
                        <s.ErrorMessage>Try use the e-mail: 'doctor1@email.com'. Password isn't require yet...</s.ErrorMessage>
                        : null 
                    }
                    <s.Button onClick={() => handleClick(valueEmail)}>Log in</s.Button>
                    <p>Not a member? <a href="#" onClick={() => alert('Service unavailable')}>Create Account</a></p>
                </s.Content>
            </s.Continer>
    )
}