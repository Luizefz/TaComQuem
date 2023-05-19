import React from 'react'
import styles from './CardList.module.scss'
import Card from './Card'

function CardList({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default CardList