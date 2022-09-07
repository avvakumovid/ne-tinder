import React, { FC } from 'react';
import Left from './Left/Left';
import Right from './Messages/Right';
import { People } from './People/People';
import { useTypedSelector } from './../../hook/useTypedSelector';

type props = {
  // cookies: any;
};
const MainPage: FC<props> = ({}) => {
  const { page } = useTypedSelector((state) => state.main);
  return (
    <div className="flex overflow-hidden max-h-screen bg-[#f0f2f4]">
      <Left />
      {page === 'messages' && <Right />}
      {page === 'people' && <People />}
      {/* <People /> */}
    </div>
  );
};

export default MainPage;
