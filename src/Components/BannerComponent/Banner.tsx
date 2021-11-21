import React from 'react'
import styles from './Banner.module.css';

function Banner() {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerWrapper}>
                <h2 className={styles.jobTitle}>UX Designer (m/f/d)</h2>
                <p className={styles.jobSubtitle}>Fulltime, Berlin, Germany</p>
            </div>
        </div>
    )
}

export default Banner
