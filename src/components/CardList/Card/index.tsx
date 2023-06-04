import React from 'react'
import styles from '../CardList.module.scss'
import { FiClock, FiHash, FiMapPin, FiUser } from "react-icons/fi";
import { motion } from 'framer-motion';
import { ICard } from '../../../shared/Interfaces/ICard';

function Card({ data, index = 0 }: { data: ICard, index: number }) {

    function getTimeStamp() {
        let timestamp = new Date(data.datetime);
        return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    return (
        <motion.div
            className={styles.container__card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
            onTap={() => alert(`Você clicou no item ${data.datetime}`)}
        >
            <div className={styles.container__card_item_info}>
                <div className={styles.container__card_item_name}>
                    <FiHash size={18} aria-label='Item' />
                    <h1>{data.name}</h1>
                </div>
                <div className={styles.container__card_item_location}>
                    {data.location.returned ?
                        <>
                            <FiMapPin size={16} aria-label='Localização do item' />
                            <p>{data.location.place}</p>
                        </>
                        :
                        <>
                            <FiUser size={16} aria-label='Detentor do ítem' />
                            <p>{data.location.holder}</p>
                        </>
                    }
                </div>
            </div>
            <div className={styles.container__card_item_timestamp}>
                <FiClock aria-label='Visto por último' />
                <p>{getTimeStamp()}</p>
            </div>
        </motion.div>
    )
}

export default Card