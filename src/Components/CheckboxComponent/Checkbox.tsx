import React from 'react'
import styles from "./Checkbox.module.css";

function Checkbox() {
    return (
        <div className={styles.concentContainer}>
        <input type="checkbox" className={styles.checkBox}/>
        <p className={styles.concentText}>I accepect <span className={styles.concentSpan}>Optilyz’s Privacy Policy</span></p>
     </div>
    )
}

export default Checkbox
