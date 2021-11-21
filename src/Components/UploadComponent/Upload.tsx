import React from 'react'
import styles from "./Upload.module.css";

function Upload() {
    return (
        <div className={styles.uploadFieldContainer}>
            <label className={styles.uploadFieldLabel}> Label <span className={styles.required}>*</span></label>
            <div className={styles.uploadField}>
                <span className={styles.linkToUpload}>Choose a file</span> (or) Drop a file.
            </div>
        </div>
    )
}

export default Upload

