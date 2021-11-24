import React from 'react'
import styles from './Banner.module.css';
import graphics from '../../Assets/top-graphics.svg';

interface BannerProps {
    jobTitle: string;
    position: string;
    place: string;
    country: string;
}

const Banner:React.FC<BannerProps> = ({ jobTitle, position, place, country }) => {
    return (
        <div className={styles.bannerContainer}>
            <img className={styles.graphicsTop} src={graphics} alt="graphics"/>
            <div className={styles.bannerWrapper}>
                <h2 className={styles.jobTitle}>{jobTitle}</h2>
                <p className={styles.jobSubtitle}>{position}, {place}, {country}</p>
            </div>
        </div>
    )
}

export default Banner
