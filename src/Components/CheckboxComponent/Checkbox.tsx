import React from 'react'
import styles from "./Checkbox.module.css";

interface checkboxProps{
    consentText: string;
    externalLink: string;
}

const Checkbox:React.FC<checkboxProps> = ({consentText,externalLink }) => {
    return (
        <div className={styles.concentContainer}>
        <input type="checkbox" className={styles.checkBox}/>
        <p className={styles.concentText}> {consentText} <span className={styles.concentSpan}>{externalLink}</span></p>
     </div>
    )
}

export default Checkbox
