import React from 'react';
import styles from './InputField.module.css';
import cx from 'classnames';

interface InputProps {
    type: string;
    placeholder: string;
    title: string | undefined;
    }



const InputField = (props: InputProps) => {
  return (
    <div className={cx(styles.fieldContainer, styles.text)}>
        <p>
            {props.title ?? props.placeholder}
        </p>
<input 
      type={props.type}
      placeholder={props.placeholder} 
      className={styles.input} 
    />
    </div>
    
    
  );
};

export default InputField;
