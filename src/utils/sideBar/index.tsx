import React from 'react'
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPerson, faBook, faHome, faComments, faBell } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

library.add(faPerson, faBook, faHome, faComments, faBell )

interface ProfileProps{
    name: string,
    post: string
}

export default function SideBar(props: ProfileProps){
    const navigator = useNavigate();
    return(
        <S.SideBar>
                <S.Profile>
                    <img src="https://cdn.folhape.com.br/img/c/1200/900/dn_arquivo/2020/01/medico1.jpg" alt="profile_picture" />
                    <h3>{props.name}</h3>
                    <p>{props.post}</p>
                </S.Profile>

                <S.Menu>
                    <li onClick={() => navigator('/home')}>
                        <p>
                            <FontAwesomeIcon icon="home" />
                            <span>Home</span>
                        </p>
                    </li>
                    <li onClick={() => alert("Page unavailable. Only 'Home' and 'Patients'")}>
                        <p>
                            <FontAwesomeIcon icon="book" />
                            <span>My Schedule</span>
                        </p>
                    </li>
                    <li onClick={() => navigator("/listPatients")}>
                        <p>
                            <FontAwesomeIcon icon="person" />
                            <span>Patients</span>
                        </p>
                    </li>
                    <li onClick={() => alert("Page unavailable. Only 'Home' and 'Patients'")}>
                        <p>
                            <FontAwesomeIcon icon="comments" />
                            <span>Notifications</span>
                        </p>
                    </li>
                    <li onClick={() => alert("Page unavailable. Only 'Home' and 'Patients'")}>
                        <p>
                            <FontAwesomeIcon icon="bell"  />
                            <span>Chats</span>
                        </p>
                    </li>
                </S.Menu>
            </S.SideBar>
    )
}