import React from 'react'
import * as S from './styles'
import * as SG from '../../utils/stylesGlobal'
import SideBar from '../../utils/sideBar'
import Card from '../../utils/card'
import { dataPatients } from '../../mock/patients';

export default function Home(){
    return(
        <SG.Continer>
            <SideBar name='John' post='Doctor' />
            <S.Content>
                <p>Welcome, Dr John</p>

                <div>
                    <h3>Patients of the day: </h3>
                    <ul style={{listStyle: 'none'}}>
                        {
                            dataPatients ? dataPatients.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Card name={item.name} hour={item.hour} problem={item.problem} image={item.image} />
                                    </li>
                                )
                            }) : null
                        }
                    </ul>
                </div>
            </S.Content>
        </SG.Continer>
    )
}