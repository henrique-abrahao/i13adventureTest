import React from 'react'
import SideBar from '../../utils/sideBar'
import * as S from './styles'
import * as SG from '../../utils/stylesGlobal'
import Card from '../../utils/card'
import { dataPatients } from '../../mock/patients'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

library.add(faUserPlus)

export default function ListPatients() {
    const navigate = useNavigate()

    return(
        <SG.Continer>
            <SideBar name='John' post='Doctor' />
            <S.Content>
                <h3>These are your active patients:</h3>
                <div>
                        <ul style={{listStyle: 'none'}}>
                            {
                                dataPatients ? dataPatients.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Card name={item.name} problem={item.problem} image={item.image} />
                                        </li>
                                    )
                                }) : null
                            }
                        </ul>
                </div>
                <S.Icon onClick={() => navigate('/registerPatient')}>
                    <FontAwesomeIcon icon='user-plus' size='2x'/>
                </S.Icon>
            </S.Content>
        </SG.Continer>        
    )
}