import React from 'react'
import styles from './InputField.module.css';

function InputField() {
    return (
        <div className={styles.inputfieldContainer}>
          <label htmlFor="inputField" className={styles.inputFieldLabel}> label <span className={styles.required}>*</span></label>
          <input className={styles.inputField} type="text" id="inputField" name="inputField" placeholder="Rakesh"></input>
        </div>
    )
}

export default InputField
