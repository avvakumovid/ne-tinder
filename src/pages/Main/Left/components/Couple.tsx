import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../../store/slices/main.slice';

type props = {
  name: string;
  avatar: string;
};

export const Couple: FC<props> = ({ name, avatar }) => {
  const dispatch = useDispatch();
  return avatar ? (
    <div
      onClick={() => {
        dispatch(setPage('messages'));
      }}
      className="w-[30%] z-30 box-border h-32 rounded-md  flex items-end m-[1.5%] relative"
    >
      <div
        className={
          'absolute m-auto top-0 left-0 bottom-0 right-0 h-[97%] w-[97%] rounded-md bg-cover ' +
          avatar
        }
      ></div>
      <span className="z-10 text-white font-extrabold ml-2 mb-2">{name}</span>
    </div>
  ) : null;
};
