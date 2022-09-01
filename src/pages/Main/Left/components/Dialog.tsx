import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../../store/slices/main.slice';

type Props = {
  picture: string;
  name: string;
  message: string;
  isVerification: boolean;
};

export const Dialog: FC<Props> = ({
  picture,
  name,
  message,
  isVerification,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex py-2 "
      onClick={() => {
        dispatch(setPage('messages'));
      }}
    >
      <div className="w-[120px]">
        <div
          className={
            'w-[74px] h-[74px] m-auto z-30 rounded-full bg-cover ' + picture
          }
        ></div>
      </div>
      <div className="flex flex-col max-w-[60%]">
        <h3 className="font-semibold">{name}</h3>
        <span className="text-[#506965]">{message}</span>
      </div>
    </div>
  );
};
