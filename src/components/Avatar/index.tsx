import React from 'react'
import styles from './Avatar.module.scss'
import { IUserCredentials } from '../../shared/Interfaces/IUserCredentials'
import DefaultAvatarPic from '../../img/profile-pic.webp'
import { motion } from "framer-motion";


function Avatar({ profilePic }: IUserCredentials) {

    const AvatarPic: string = profilePic || DefaultAvatarPic

    return (
        <motion.img
            alt="Imagem de Perfil"
            className={styles.avatar_pic} src={AvatarPic}
            draggable='false'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}

        />
    )
}

export default Avatar