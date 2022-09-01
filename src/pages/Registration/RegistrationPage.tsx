import React, { useState } from 'react';
import Input from '../../components/input/Input';
import styles from './style.module.css';
import ImagePreview from './../../components/ui/ImagePreview/ImagePreview';

export default function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [files, setFiles] = useState<any>([]);

  const formData = new FormData();
  return (
    <div className={styles.container}>
      {files.length && files.map((f: any) => <ImagePreview file={f} />)}
      <form className={styles.form}>
        <Input lable="Имя" type="text" setValue={setName} value={name} />
        <Input
          lable="Дата рождения"
          type="date"
          setValue={setBirthdate}
          value={birthdate}
        />
        <Input lable="email" type="email" setValue={setEmail} value={email} />
        <Input
          lable="пароль"
          type="password"
          setValue={setPassword}
          value={password}
        />
        <input
          type="file"
          className={styles.file}
          multiple
          onChange={(e) => {
            setFiles([...files, e.currentTarget.files]);
          }}
        />

        <button
          className={styles.button}
          type="button"
          onClick={(e) => {
            // console.log(email, name, password, birthdate, file);
            // onupload();
          }}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
