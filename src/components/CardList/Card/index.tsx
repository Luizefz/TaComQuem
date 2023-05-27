import React from 'react'
import styles from '../CardList.module.scss'
import { FiClock, FiHash, FiMapPin, FiUser } from "react-icons/fi";
import { motion } from 'framer-motion';
import { ICards } from '../../../shared/Interfaces/ICards';

function Card({ item, i = 0 }: ICards) {

    return (
        <motion.div className={styles.container__card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 + 1 }}
        >
            <div className={styles.container__card_item_info}>
                <div className={styles.container__card_item_name}>
                    <FiHash size={18} aria-label='Item' />
                    <h1>{item.name}</h1>
                </div>
                <div className={styles.container__card_item_location}>
                    {item.location.returned ?
                        <>
                            <FiMapPin size={16} aria-label='Localização do item' />
                            <p>{item.location.place}</p>
                        </>
                        :
                        <>
                            <FiUser size={16} aria-label='Detentor do ítem' />
                            <p>{item.location.holder}</p>
                        </>
                    }
                </div>
            </div>
            <div className={styles.container__card_item_timestamp}>
                <FiClock aria-label='Visto por último' />
                <p>{item.timestamp}</p>
            </div>
        </motion.div>
    )
}

export default Card