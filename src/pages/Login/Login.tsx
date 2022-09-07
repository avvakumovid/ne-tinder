import { Formik, FormikProps } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { LoginBody } from '../../api/api';
import { AppDispatch } from '../../store';
import { login } from '../../store/slices/user.slice';

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex h-screen bg-[url(https://tinder.com/static/build/07eef8b101ca939c978a599f508aa955.webp)] justify-center items-start">
      <div className="h-72 w-96 rounded-lg mt-20 border border-[#FE4358] bg-white">
        <Formik<LoginBody>
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            dispatch(login(values))
          }}
          component={loginForm}
        />
      </div>
    </div>
  );
};

const loginForm: (props: FormikProps<LoginBody>) => JSX.Element = ({
  handleSubmit,
  values,
  handleChange,
  setFieldValue,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full justify-between  p-6"
    >
      <div>
        <label className="flex flex-col">
          Email
          <input
            value={values.email}
            onChange={handleChange}
            className="mb-4 p-1 border border-[#FE4358] rounded-sm"
            type="email"
            name="email"
            placeholder="Введите email"
          />
        </label>
        <label className="flex flex-col">
          Пароль
          <input
            value={values.password}
            onChange={handleChange}
            className="mb-4 p-1 border border-[#FE4358] rounded-sm"
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
        </label>
      </div>
      <button className="w-32 p-1 self-center text-white rounded-lg bg-gradient-to-r from-[#fd267a]  to-[#ff6036]">
        Войти
      </button>
    </form>
  );
};
