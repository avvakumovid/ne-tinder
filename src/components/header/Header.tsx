import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center h-[50px] px-5 shadow-sm bg-cyan-700 text-white">
      <h2 className="tracking-widest uppercase font-bold">
        <Link to="/main" className="uppercase mr-2">
          ne tinder
        </Link>
      </h2>
      <span>
        <Link to="/" className="uppercase mr-2">
          Auth
        </Link>
        <Link to="/main" className="uppercase mr-2">
          Main
        </Link>
        <Link to="/registration" className="uppercase">
          Регистрация
        </Link>
      </span>
    </header>
  );
}
