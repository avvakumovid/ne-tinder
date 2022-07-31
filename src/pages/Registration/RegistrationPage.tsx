import React, { useRef, useState } from 'react';
import Input from '../../components/input/Input';
import styles from './style.module.css';
import { PrewiewImage } from './PrewiewImage';
import axios from 'axios';
import ImagePreview from './../../components/ui/ImagePreview/ImagePreview';

export default function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [file, setFile] = useState<FileList | null>();

  const formData = new FormData();
  const onupload = () => {
    if (file) {
      formData.append('file', file[0]);
      // console.log({ ...formData });
      axios
        .post('http://localhost:5000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((r) => console.log(r));
    }
  };

  return (
    <div className={styles.container}>
      {file && <ImagePreview file={file} />}
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
        <label>
          <p className={styles.label}>Добавить фотографии</p>
        </label>
        <input
          type="file"
          className={styles.file}
          onChange={(e) => {
            setFile(e.currentTarget.files);
          }}
        />

        <button
          className={styles.button}
          type="button"
          onClick={(e) => {
            console.log(email, name, password, birthdate, file);
            onupload();
          }}

          // onClick={() => {
          //   fileRef.current.click();
          // }}
        >
          Зарегистрироваться
        </button>
      </form>
      {/* <PrewiewImage file={file} /> */}
    </div>
  );
}
