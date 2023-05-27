import React from 'react'
import styles from './LargeButton.module.scss'
import { FiPlus } from 'react-icons/fi'

function LargeButton() {
    return (
        <button className={styles.button}>
            <div className={styles.button__content}>
                <h1>Visto por último</h1>
                <FiPlus fontSize={23} />
            </div>
        </button>
    )
}

export default LargeButton