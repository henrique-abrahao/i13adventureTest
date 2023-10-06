import React from 'react';
import * as S from './styles'

interface CardsProps {
    name: string,
    problem: string,
    hour?: string,
    image?: string
}

export default function Card(props: CardsProps) {
    return(
        <S.Card>
            <img src={props.image ? props.image : "https://1fid.com/wp-content/uploads/2022/06/no-profile-picture-4-1024x1024.jpg"} alt="Patient 1" />
            <div className='InformationPatients'>
                <span>{props.name}</span>
                <span>Treatment: {props.problem}</span>
                {props.hour ? <h3>{props.hour}</h3> : null}
            </div>
        </S.Card>
    )
}