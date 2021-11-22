import React from 'react'
import styles from './Banner.module.css';

interface Props{
    jobTitle: string;
    position: string;
    place: string;
    country: string;
}

const Banner:React.FC<Props> = ({jobTitle, position, place, country }) => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerWrapper}>
                <h2 className={styles.jobTitle}>{jobTitle}</h2>
                <p className={styles.jobSubtitle}>{position}, {place}, {country}</p>
            </div>
        </div>
    )
}

export default Banner
