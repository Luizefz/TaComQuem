import React from 'react'
import styles from './Header.module.scss'
import Logo from '../../img/TCQ-logo.png'
import Avatar from '../Avatar'

function Header() {

    return (
        <div className={styles.header}>
            <img className={styles.header__logo} src={Logo} alt="Tá com quem?" draggable='false' />
            <Avatar />
        </div>
    )
}

export default Header