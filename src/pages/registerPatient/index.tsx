import React, { useState } from 'react'
import * as S from './styles'
import * as SG from '../../utils/stylesGlobal'
import SideBar from '../../utils/sideBar'
import { useNavigate } from 'react-router-dom'
import { dataPatients } from '../../mock/patients'

export default function RegisterPatient() {
    const [name, setName] = useState('')
    const [problem, setProblem] = useState('')
    const [hour, setHour] = useState('')

    const navigate = useNavigate()

    const handleClick = () => {
        dataPatients.push({ 
            doctorId: 1, 
            hour: hour, 
            name: name, 
            problem: problem 
        })
        navigate('/home')
    }

    return(
        <SG.Continer>
            <SideBar name='John' post='Doctor' />

            <S.Content>
                <h3>Register a new patient: </h3>
                <S.Form>
                    <label htmlFor="name">Name:</label>
                    <input id='name' value={name} onChange={(e) => setName(e.target.value)} required />

                    <label htmlFor='problem'>Problem:</label>
                    <input id='problem' value={problem} onChange={(e) => setProblem(e.target.value)} required/>

                    <label htmlFor="hour">Hour:</label>
                    <input id='hour' value={hour} onChange={(e) => setHour(e.target.value)} required/>

                    <button onClick={() => handleClick()}>Create new patient</button>
                </S.Form>
            </S.Content>
        </SG.Continer>
    )
}