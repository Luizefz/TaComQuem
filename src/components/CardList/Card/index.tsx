import React from 'react'
import styles from '../CardList.module.scss'
import { FiClock, FiHash, FiMapPin, FiUser } from "react-icons/fi";

function Card({ item }: any) {

    return (
        <div className={styles.container__card}>
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
        </div>
    )
}

export default Card