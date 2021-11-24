import React from 'react'
import styles from "./Button.module.css";

interface buttonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    buttonText: string;
}

const Button:React.FC<buttonProps>  = ({ buttonText, ...props}) => {
    return (
        <button {...props} className={styles.buttonComponent}>
           {buttonText}
        </button>
    )
}

export default Button
