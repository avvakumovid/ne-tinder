import React, { FC } from 'react';
import Svg from '../../../assets/cross-circled.svg';
import {
  Chat as ChatType,
  Match,
  Message as MessageType,
} from '../../../types/chat.type';
import { Message } from './Message';

type Props = {
  userId: string;
  picture?: string;
  name?: string;
  date?: string;
  match: Match;
};

export const Chat: FC<Props> = ({ userId, picture, name, date, match }) => {
  return (
    <div className="w-[50vw] h-[100vh] flex flex-col justify-start">
      <div className="h-[87px] p-8 border-b flex flex-row  justify-between items-center">
        <div className="flex justify-start items-center">
          <div className="w-[50px] h-[50px] flex  shadow-s rounded-full">
            <div
              className={
                'w-[52px] h-[52px] m-auto z-30 rounded-full bg-cover border-4 border-white  ' +
                picture
              }
            ></div>
          </div>
          <span className="text-lg font-medium text-[#505965] pl-4">
            Вы и {name} образовали пару {date}
          </span>
        </div>
        {
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 15 15"
            fill="#ccc"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
              fill="#ccc"
            />
          </svg>
        }
      </div>
      <div className="border h-full w-auto p-5 flex flex-col-reverse justify-start items-start overflow-auto no-scrollbar">
        {match.chat.messages.map((message) => (
          <Message
            isMine={message.author === userId}
            text={message.message}
            time="19:29"
            avatar={`http://127.0.0.1:5000/api/file/${match.user.pictures[0]}`}
          />
        ))}
        <Message
          isMine={true}
          text="Привет)"
          time="19:29"
          avatar="bg-[url(https://sun9-36.userapi.com/impg/t_ARITbrtrkLF8VEXp03SLm33101aKGuvlQkOA/7scGN4GoEUE.jpg?size=780x1040&quality=95&sign=0d1b161e78ca44d0863810e4fa4e9b0f&type=album)]"
        />
      </div>
      <div className="border-x min-h-[73px] flex justify-between items-center px-4">
        <div className="flex">
          <div className="w-[33px] h-[33px] mr-4 rounded-full bg-[#f0f2f4] flex justify-center items-center">
            <svg
              focusable="false"
              aria-hidden="true"
              role="presentation"
              viewBox="0 0 24 24"
            >
              <g fillRule="nonzero" fill="none">
                <g fill="#f0f2f4">
                  <path d="M2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10C6.477 2 2 6.477 2 12z"></path>
                  <g transform="translate(7.162 9.006)">
                    <circle cx="1.977" cy="1.412" r="1.412"></circle>
                    <path d="M3.953 5.96c0-1.715-.885-3.106-1.976-3.106C.885 2.854 0 4.245 0 5.961"></path>
                  </g>
                </g>
                <path
                  d="M17.218 9.175a3.616 3.616 0 0 0-.487-.032H9.303a3.46 3.46 0 0 0-2.345.896 2.946 2.946 0 0 0-.971 2.164v.156c0 .242.03.479.088.705C5.393 12.536 5 11.756 5 10.934v-.152C5 9.245 6.35 8 8.014 8h6.743c1.016 0 1.915.465 2.461 1.175zm-7.338.551h6.105c1.665 0 3.014 1.245 3.015 2.781v.711C19 14.755 17.65 16 15.986 16H9.881c-1.665 0-3.014-1.246-3.014-2.782v-.71c0-1.537 1.35-2.782 3.014-2.782H9.88zm.22 3.214c.422 0 .764-.322.764-.72 0-.397-.342-.72-.763-.72-.422 0-.763.323-.763.72 0 .398.341.72.763.72zm.025.278c-.719 0-1.17.359-1.354 1.076a.133.133 0 0 0 .028.12c.03.035.074.054.121.054h2.33a.159.159 0 0 0 .117-.05.134.134 0 0 0 .034-.114c-.128-.724-.553-1.086-1.276-1.086zm2.946-1.717c-.294 0-.533.22-.533.492v.015c0 .272.239.492.533.492h3.241c.295 0 .533-.22.533-.492v-.015c0-.272-.238-.492-.533-.492h-3.24zm0 1.5a.557.557 0 0 0-.377.144.474.474 0 0 0-.156.348v.015c0 .13.056.256.156.348.1.093.236.145.377.145h1.087c.295 0 .533-.22.533-.493v-.015c0-.272-.238-.492-.533-.492h-1.087z"
                  fill="#47a1ff"
                ></path>
              </g>
            </svg>
          </div>
          <div className="w-[33px] h-[33px] mr-4 rounded-full bg-[#f0f2f4] flex justify-center items-center">
            <svg
              focusable="false"
              aria-hidden="true"
              role="presentation"
              viewBox="0 0 24 24"
            >
              <g transform="translate(2 2)" fillRule="nonzero" fill="none">
                <circle fill="#f0f2f4" cx="10" cy="10" r="10"></circle>
                <path
                  d="M6.844 13c.97 0 1.73-.434 2.275-1.094V9.683H6.57v1.077h1.41v.694c-.216.217-.665.443-1.137.443-.97 0-1.674-.807-1.674-1.901 0-1.094.704-1.902 1.674-1.902.569 0 1.025.347 1.265.755l.946-.555C8.655 7.608 7.957 7 6.844 7 5.282 7 4 8.164 4 9.996 4 11.819 5.282 13 6.844 13zm4.318-.113V7.096h-1.138v5.791h1.138zm2.194 0v-2.396h2.588V9.405h-2.588V8.181H16V7.096h-3.781v5.791h1.137z"
                  fill="#47a1ff"
                ></path>
              </g>
            </svg>
          </div>
          <div className="w-[33px] h-[33px] mr-4 rounded-full bg-[#f0f2f4] flex justify-center items-center">
            <svg
              focusable="false"
              aria-hidden="true"
              role="presentation"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <g fill="#f0f2f4" fillRule="nonzero">
                  <path d="M2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10S2 6.477 2 12z"></path>
                  <g transform="translate(7.162 9.006)">
                    <circle cx="1.977" cy="1.412" r="1.412"></circle>
                    <path d="M3.953 5.96c0-1.715-.885-3.106-1.976-3.106C.885 2.854 0 4.245 0 5.961"></path>
                  </g>
                </g>
                <path
                  d="M5.804 9.129a.222.222 0 010-.408l.02-.009A3.101 3.101 0 007.535 6.9l.017-.047a.222.222 0 01.418 0l.016.047a3.101 3.101 0 001.71 1.813l.021.01c.18.075.18.33 0 .407l-.02.009a3.101 3.101 0 00-1.71 1.813l-.017.047a.222.222 0 01-.418 0l-.016-.047a3.101 3.101 0 00-1.71-1.813l-.021-.01zm10.774 4.521c.273-.273.09-.73-.296-.702-1.21.089-2.135.448-2.76 1.073-.627.626-.986 1.552-1.074 2.761-.028.385.429.57.702.296l3.428-3.428zM6.209 12.48c0-.604.093-1.186.265-1.733.192.246.347.522.457.818.285.77 1.373.77 1.658 0a3.122 3.122 0 011.745-1.793c.752-.307.752-1.387 0-1.693a3.135 3.135 0 01-1.049-.703 5.745 5.745 0 012.694-.666c2.847 0 5.212 2.088 5.684 4.803.046.268-.18.495-.452.486-1.934-.06-3.403.375-4.37 1.343-.915.915-1.377 2.278-1.377 4.06 0 .102.002.205.005.31.008.272-.219.498-.487.451A5.771 5.771 0 016.21 12.48z"
                  fill="#9908e8"
                ></path>
              </g>
            </svg>
          </div>
          <div className="w-[33px] h-[33px] mr-4 rounded-full bg-[#f0f2f4] flex justify-center items-center">
            <svg
              focusable="false"
              aria-hidden="true"
              role="presentation"
              viewBox="0 0 24 24"
            >
              <g fillRule="nonzero" fill="none">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2z"
                  fill="#f0f2f4"
                ></path>
                <path
                  d="M15.183 7.006l-5.835.786a.72.72 0 0 0-.62.716v5.466a2.325 2.325 0 0 0-.944-.104c-1.066.104-1.866.897-1.777 1.75.078.862 1.011 1.472 2.077 1.369 1.067-.104 1.866-.897 1.777-1.76 0-.013 0-.024-.01-.047l.01-4.982c0-.18.13-.331.304-.358l4.286-.65a.354.354 0 0 1 .285.084.364.364 0 0 1 .124.273v3.815a2.325 2.325 0 0 0-.944-.103c-1.067.103-1.866.897-1.777 1.76.077.863 1.01 1.473 2.077 1.37 1.066-.104 1.866-.898 1.777-1.761-.007.007-.007-2.295-.001-6.906a.727.727 0 0 0-.244-.545.708.708 0 0 0-.565-.173z"
                  fill="#1bd760"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <textarea
          className="w-80 resize-none max-h-96 overflow-auto no-scrollbar focus:border-0"
          placeholder="Введите сообщение"
          maxLength={5000}
        />
        <div className="w-[33px] h-[33px] mr-4 rounded-full bg-[#f0f2f4] flex justify-center items-center">
          <svg viewBox="0 0 24 24">
            <path
              d="M12 15.3c1.398 0 2.58-.876 3.066-2.1H8.934A3.298 3.298 0 0012 15.3m-2.1-3.9a.9.9 0 100-1.8.9.9 0 000 1.8m4.2 0a.9.9 0 100-1.8.9.9 0 000 1.8M12 16.8a4.8 4.8 0 110-9.6 4.8 4.8 0 010 9.6M12 6a6 6 0 100 12 6 6 0 000-12z"
              fill="#f8a81f"
            ></path>
          </svg>
        </div>
        <button className="text-white py-2 px-5 font-semibold rounded-full bg-gradient-to-r from-[#fd267a]  to-[#ff6036]">
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  );
};
