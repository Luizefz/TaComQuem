import React from 'react'
import styles from './Header.module.scss'
import Logo from '../../img/TCQ-logo.png'
import Avatar from '../Avatar'

function Header() {

    return (
        <div className={styles.header}>
            <img className={styles.header__logo} src={Logo} alt="Tá com quem?" draggable='false' />
            <Avatar profilePic='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover&q=80' />
        </div>
    )
}

export default Header