import React from 'react'
import styles from './Banner.module.css';

function Banner() {
    return (
        <div className={styles.bannerContainer}>
            <div>
                <h1 className={styles.jobTitle}>UX Designer (m/f/d)</h1>
                <p className={styles.jobSubtitle}>Fulltime, Berlin, Germany</p>
            </div>
        </div>
    )
}

export default Banner
