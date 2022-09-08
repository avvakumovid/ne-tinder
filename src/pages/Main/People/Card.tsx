import React, { FC, useState } from 'react';
import { Info } from '../../../components/info/Info';

type Props = {
  pictures: string[];
  name: string;
  age: number;
  work: string;
  location: string;
  gender: string;
  distance: string;
  about: string;
  avatars: string[];
  zIndex: number;
};

export const Card: FC<Props> = ({
  pictures,
  name,
  age,
  work,
  location,
  gender,
  distance,
  about,
  avatars,
  zIndex,
}) => {
  const [isInfo, setIsInfo] = useState(false);
  return (
    <>
      {!isInfo ? (
        <div
          // onMouseDown={onMouseDown}
          draggable={true}
          className={
            `flex text-white flex-col justify-end items-start p-4 h-[700px] absolute w-[375px] bg-slate-400 rounded-md bg-cover ` +
            pictures[0]
          }
        >
          <span className="text-3xl text-white">
            <span className="font-extrabold">{name}</span> {age}
          </span>
          <div className="flex flex-row  items-center justify-between w-full">
            <span className="text-lg flex items-center">
              <svg
                focusable="false"
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 24 24"
                width="16px"
                height="16px"
              >
                <g
                  fill="white"
                  stroke="white"
                  strokeWidth=".5"
                  fillRule="evenodd"
                >
                  <path d="M11.436 21.17l-.185-.165a35.36 35.36 0 0 1-3.615-3.801C5.222 14.244 4 11.658 4 9.524 4 5.305 7.267 2 11.436 2c4.168 0 7.437 3.305 7.437 7.524 0 4.903-6.953 11.214-7.237 11.48l-.2.167zm0-18.683c-3.869 0-6.9 3.091-6.9 7.037 0 4.401 5.771 9.927 6.897 10.972 1.12-1.054 6.902-6.694 6.902-10.95.001-3.968-3.03-7.059-6.9-7.059h.001z"></path>
                  <path d="M11.445 12.5a2.945 2.945 0 0 1-2.721-1.855 3.04 3.04 0 0 1 .641-3.269 2.905 2.905 0 0 1 3.213-.645 3.003 3.003 0 0 1 1.813 2.776c-.006 1.653-1.322 2.991-2.946 2.993zm0-5.544c-1.378 0-2.496 1.139-2.498 2.542 0 1.404 1.115 2.544 2.495 2.546a2.52 2.52 0 0 0 2.502-2.535 2.527 2.527 0 0 0-2.499-2.545v-.008z"></path>
                </g>
              </svg>
              <span className="ml-1">{distance}</span>
            </span>
            <button
              onClick={() => {
                setIsInfo((prev) => !prev);
              }}
            >
              <svg
                focusable="false"
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path
                  fill="#fff"
                  d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-row  items-center justify-between w-full mt-8">
            <div className="w-[58px] h-[58px] border border-[#fbbd3c] rounded-full flex justify-center items-center active:bg-[#fbbd3c]">
              <svg
                focusable="false"
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 24 24"
                width="34px"
                height="34px"
              >
                <path
                  d="M12.119 4.599V3.307c0-1.216-.76-1.672-1.824-.988l-.608.304L6.04 5.13l-.456.304c-1.064.76-1.064 1.748 0 2.28l.38.38c.987.76 2.66 1.824 3.647 2.432l.532.304c.912.76 1.748.228 1.748-.912V8.246a5.125 5.125 0 0 1 5.167 5.167c0 2.888-2.28 5.092-5.167 5.092-3.04 0-5.32-2.28-5.32-5.168 0-.912-.76-1.671-1.747-1.671-1.064 0-1.824.76-1.824 1.671C3 18.125 6.951 22 11.815 22c4.787 0 8.738-3.8 8.738-8.663.076-4.711-3.875-8.51-8.662-8.51l.228-.228z"
                  fill="#fbbd3c"
                ></path>
              </svg>
            </div>
            <div className="w-[68px] h-[68px] border border-[#FE4358] rounded-full flex justify-center items-center active:bg-[#FE4358]">
              <svg
                className="fill-[#FE4358]  "
                focusable="false"
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 24 24"
                width="34px"
                height="34px"
              >
                <path d="m15.44 12 4.768 4.708c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L12 15.52l-4.713 4.605c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417L8.47 12 3.874 7.271c-1.138-.976-1.138-2.44 0-3.417a1.973 1.973 0 0 1 3.25 0L12 8.421l4.713-4.567c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417L15.44 12Z"></path>
              </svg>
            </div>
            <div className="w-[58px] h-[58px] border border-[#3dc5f8] rounded-full flex justify-center items-center active:bg-[#3dc5f8]">
              <svg
                focusable="false"
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 24 24"
                width="34px"
                height="34px"
              >
                <path
                  d="M21.06 9.06l-5.47-.66c-.15 0-.39-.25-.47-.41l-2.34-5.25c-.47-.99-1.17-.99-1.56 0L8.87 7.99c0 .16-.23.4-.47.4l-5.47.66c-1.01 0-1.25.83-.46 1.65l4.06 3.77c.15.16.23.5.15.66L5.6 20.87c-.16.98.4 1.48 1.33.82l4.69-2.79h.78l4.69 2.87c.78.58 1.56 0 1.25-.98l-1.02-5.75s0-.4.23-.57l3.91-3.86c.78-.82.78-1.64-.39-1.64v.08z"
                  fill="#3dc5f8"
                ></path>
              </svg>
            </div>
            <div className="w-[68px] h-[68px] border border-[#29e4bc] rounded-full flex justify-center items-center active:bg-[#29e4bc]">
              <svg
                focusable="false"
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 24 24"
                width="34px"
                height="34px"
              >
                <path
                  d="M21.994 10.225c0-3.598-2.395-6.212-5.72-6.212-1.78 0-2.737.647-4.27 2.135C10.463 4.66 9.505 4 7.732 4 4.407 4 2 6.62 2 10.231c0 1.52.537 2.95 1.533 4.076l8.024 7.357c.246.22.647.22.886 0l7.247-6.58.44-.401.162-.182.168-.174a6.152 6.152 0 0 0 1.54-4.09"
                  fill="#29e4bc"
                ></path>
              </svg>
            </div>
            <div className="w-[58px] h-[58px] border border-[#b041ee] rounded-full flex justify-center items-center active:bg-[#b041ee]">
              <svg
                focusable="false"
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 24 24"
                width="34px"
                height="34px"
              >
                <path
                  d="M15.979 14.018c.637-.638.51-1.275-.192-1.722l-1.275-.765c-.638-.383-1.148-1.275-.956-2.104L15.15 2.73c.191-.765-.128-.956-.765-.446L6.414 9.937c-.638.638-.51 1.275.19 1.722l1.276.765c.638.382 1.148 1.275.957 2.168l-1.658 6.632c-.191.829.191 1.02.765.446l8.035-7.652z"
                  fill="#b041ee"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div
          // onMouseDown={onMouseDown}
          draggable={true}
          className={`flex overflow-auto absolute no-scrollbar text-white flex-col  items-start  h-[700px] w-[375px] bg-white rounded-md bg-cover `}
        >
          <div
            className={'w-full min-h-[470px] bg-cover relative ' + pictures[0]}
          >
            <button
              className="absolute top-[94%] left-[82%]"
              onClick={() => {
                setIsInfo((prev) => !prev);
              }}
            >
              <svg
                focusable="false"
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 24 24"
                width="54px"
                height="54px"
              >
                <g transform="translate(2 2)" fillRule="nonzero" fill="none">
                  <circle fill="#FE4358" cx="10" cy="10" r="10"></circle>
                  <path
                    d="M9.35 14.561l-.895-1.09-1.301-1.587-.894-1.09c-.358-.437-.19-.794.375-.794h1.733c.096-.661.403-3.178.484-3.732.096-.66.516-1.147 1.146-1.147h.003c.63 0 1.05.487 1.147 1.147.08.554.387 3.071.484 3.732h1.732c.565 0 .734.357.376.793l-.894 1.09-1.302 1.588-.894 1.09c-.357.437-.943.437-1.3 0"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <Info
            about={about}
            age={age}
            distance={distance}
            gender={gender}
            location={location}
            name={name}
            work={work}
          />
        </div>
      )}
    </>
  );
};
