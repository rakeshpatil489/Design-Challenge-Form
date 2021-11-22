import React from 'react'
import styles from "./Button.module.css";

interface Props{
    buttonText: string;
}

const Button:React.FC<Props>  = ({buttonText}) => {
    return (
        <button className={styles.buttonComponent}>
           {buttonText}
        </button>
    )
}

export default Button
