import React, { FC } from 'react';

type Props = {
  picture: string;
  name: string;
  message: string;
  isVerification: boolean;
};

export const HideDialog: FC<Props> = ({
  picture,
  name,
  message,
  isVerification,
}) => {
  return (
    <div className="flex py-2">
      <div className="w-[120px]">
        <div
          className={
            ' w-[74px] h-[74px] m-auto z-30 rounded-full bg-cover ' + picture
          }
        ></div>
      </div>
      <div className="flex flex-col  max-w-[60%]">
        <h3 className="font-semibold">
          {name}
          <span className="ml-2 uppercase text-xs px-2  font-extrabold skew-y-12 bg-[#E6AF16]">
            Лайкнул(а) тебя
          </span>
        </h3>

        <span className="text-[#506965]">
          Был(а) недавно, создай пару прямо сейчас!
        </span>
      </div>
    </div>
  );
};
