import React from 'react'
import styles from './InputField.module.css';

interface inputFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label: string;
}

const InputField:React.FC<inputFieldProps> =({label, ...props}) => {
    return (
        <div className={styles.inputfieldContainer}>
          <label htmlFor={label} className={styles.inputFieldLabel}> {label} <span className={styles.required}>*</span></label>
          <input {...props} name={label} className={styles.inputField}></input>
        </div>
    )
}

export default InputField
