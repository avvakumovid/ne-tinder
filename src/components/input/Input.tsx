import React, { FC } from 'react';
import styles from './style.module.css';

type props = {
  lable: string;
  type:
    | 'week'
    | 'url'
    | 'time'
    | 'text'
    | 'tel'
    | 'submit'
    | 'search'
    | 'reset'
    | 'radio'
    | 'password'
    | 'number'
    | 'month'
    | 'image'
    | 'hidden'
    | 'file'
    | 'email'
    | 'datetime-local'
    | 'date'
    | 'color'
    | 'checkbox'
    | 'button';
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input: FC<props> = ({ lable, setValue, type, value }) => {
  return (
    <>
      <label>
        <p className={styles.label}>{lable}</p>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type={type}
          className={styles.input}
        ></input>
      </label>
    </>
  );
};

export default Input;
