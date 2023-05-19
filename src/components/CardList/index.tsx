import React, { useRef } from 'react'
import styles from './CardList.module.scss'
import { motion } from 'framer-motion'

function CardList({ children }: { children: React.ReactNode }) {

    const constraintsRef = useRef(null);

    return (
        <section className={styles.container}>
            <motion.ul
                className={styles.container}
                ref={constraintsRef}
            >
                <motion.li
                    drag="y"
                    dragConstraints={constraintsRef}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                >
                    {children}
                </motion.li>
            </motion.ul>
        </section>
    )
}

export default CardList