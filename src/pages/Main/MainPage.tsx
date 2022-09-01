import React from 'react';
import Left from './Left/Left';
import Right from './Messages/Right';
import { People } from './People/People';
import { useTypedSelector } from './../../hook/useTypedSelector';

export default function MainPage() {
  const { page } = useTypedSelector((state) => state.main);
  return (
    <div className="flex overflow-hidden max-h-screen">
      <Left />
      {page === 'messages' && <Right />}
      {page === 'people' && <People />}
      {/* <People /> */}
    </div>
  );
}
