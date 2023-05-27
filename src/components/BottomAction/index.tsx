import React from 'react'
import LargeButton from '../LargeButton'
import styles from './BottomAction.module.scss'

function BottomAction() {
    return (
        <div className={styles.container}>
            <div className={styles.container__content}>
                <LargeButton />
            </div>
        </div>
    )
}

export default BottomAction