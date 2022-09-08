import console from 'console';
import React, { FC, useState } from 'react';

type Props = {
  text: string;
  time: string;
  avatar: string;
  isMine: boolean;
  isLike?: boolean;
};

export const Message: FC<Props> = ({ text, time, avatar, isMine, isLike }) => {
  const style = isMine
    ? `px-3 py-2 bg-blue-500 text-white w-auto rounded-2xl rounded-br-md `
    : 'px-3 py-2 bg-[#f0f2f4]  w-auto rounded-2xl rounded-bl-md ';

  const [showTime, setShowTime] = useState(false);
  const position = isMine ? ' justify-end' : ' justify-between ';
  return (
    <div
      className={
        `flex items-center mb-2  w-full hover:after:content-['${time}']` +
        position
      }
    >
      <div className="flex flex-row items-center">
        {showTime && isMine && <span className="text-[10px] mr-2">{time}</span>}
        {!isMine && (
          <div
            className={
              'w-[52px] h-[52px] m-auto z-30 rounded-full bg-cover border-4 border-white  ' +
              avatar
            }
          ></div>
        )}
        <div
          className={style}
          onMouseEnter={() => {
            setShowTime(true);
          }}
          onMouseLeave={() => {
            setShowTime(false);
          }}
        >
          {text}
        </div>
        {showTime && !isMine && (
          <span className="text-[10px] ml-2">{time}</span>
        )}
      </div>
      {!isMine &&
        (isLike ? (
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="20px"
            height="20px"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"
              fill="#ff4458"
              stroke="#ff4458"
              strokeWidth="2"
            ></path>
          </svg>
        ) : (
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="20px"
            height="20px"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"
              fill="#ffffff"
              stroke="#e9ebee"
              strokeWidth="2"
            ></path>
          </svg>
        ))}
    </div>
  );
};
