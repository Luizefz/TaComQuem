import React from 'react'
import styles from './Header.module.scss'
import Logo from '../../img/TCQ-logo.png'
import DefaultProfilePic from '../../img/profile-pic.jpg'
import { IUserCredentials } from '../../shared/Interfaces/IUserCredentials'

function Header({ urlProfilePic }: IUserCredentials) {

    const profilePic: string = urlProfilePic || DefaultProfilePic

    return (
        <div className={styles.header}>
            <img className={styles.header__logo} src={Logo} alt="Tá com quem?" draggable='false' />
            <img className={styles.header__profilePic} src={profilePic} alt="Perfil" />
        </div>
    )
}

export default Header