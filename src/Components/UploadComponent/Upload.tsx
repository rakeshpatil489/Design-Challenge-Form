import React from 'react'
import styles from "./Upload.module.css";

interface Props{
    label: string;
}

const Upload:React.FC<Props> = ({label}) => {
    return (
        <div className={styles.uploadFieldContainer}>
            <label className={styles.uploadFieldLabel}> {label} <span className={styles.required}>*</span></label>
            <div className={styles.uploadField}>
                <span className={styles.linkToUpload}>Choose a file</span> (or) Drop a file.
            </div>
        </div>
    )
}

export default Upload

