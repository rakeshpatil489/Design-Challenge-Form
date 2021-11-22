import React from 'react'
import styles from './InputField.module.css';

interface Props{
  label: string;
  placeholder: string;
  type: string;
}

const InputField:React.FC<Props> =({label, placeholder, type}) => {
    return (
        <div className={styles.inputfieldContainer}>
          <label htmlFor={label} className={styles.inputFieldLabel}> {label} <span className={styles.required}>*</span></label>
          <input name={label} className={styles.inputField} type={type}  placeholder={placeholder}></input>
        </div>
    )
}

export default InputField
