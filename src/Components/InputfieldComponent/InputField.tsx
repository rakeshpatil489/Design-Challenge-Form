import React from 'react'
import styles from './InputField.module.css';

function InputField() {
    return (
        <div className={styles.inputfieldContainer}>
          <label className={styles.inputFieldLabel}> label <span className={styles.required}>*</span></label>
          <input className={styles.inputField} type="text" id="inputLabel" name="inputLabel" placeholder="Rakesh"></input>
        </div>
    )
}

export default InputField
