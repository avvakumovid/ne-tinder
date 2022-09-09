import React, { FC } from 'react';

type props = {
  name: string;
  age: number;
  work: string;
  location: string;
  gender: string;
  distance: string;
  about: string;
};

export const Info: FC<props> = ({
  about,
  age,
  distance,
  gender,
  location,
  name,
  work,
}) => {
  return (
    <div>
      <div className="py-[10px] px-[16px] text-[#505965] text-lg">
        <span className="text-[#21262e]">
          <span className="font-extrabold mr-1 text-3xl">{name}</span>{' '}
          <span className="text-2xl">{age}</span>
        </span>
        <span className="flex items-center">
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="16px"
            height="16px"
          >
            <g
              transform="translate(2 5)"
              stroke="#505965"
              fill="none"
              fillRule="evenodd"
            >
              <rect
                x="5.006"
                y="3.489"
                width="9.988"
                height="9.637"
                rx=".936"
              ></rect>
              <path d="M7.15 3.434h5.7V1.452a.728.728 0 0 0-.724-.732H7.874a.737.737 0 0 0-.725.732v1.982z"></path>
              <rect
                x=".72"
                y="3.489"
                width="18.56"
                height="9.637"
                rx=".936"
              ></rect>
            </g>
          </svg>
          <span className="ml-1">{work}</span>
        </span>
        <span className="flex items-center">
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="16px"
            height="16px"
          >
            <g
              stroke="#505965"
              strokeWidth=".936"
              fill="none"
              fillRule="evenodd"
            >
              <path d="M19.695 9.518H4.427V21.15h15.268V9.52zM3.109 9.482h17.933L12.06 3.709 3.11 9.482z"></path>
              <path d="M9.518 21.15h5.086v-6.632H9.518z"></path>
            </g>
          </svg>
          <span className="ml-1"> {location}</span>
        </span>
        <span className="flex items-center">
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="16px"
            height="16px"
          >
            <path
              d="M15.507 13.032c1.14-.952 1.862-2.656 1.862-5.592C17.37 4.436 14.9 2 11.855 2 8.81 2 6.34 4.436 6.34 7.44c0 3.07.786 4.8 2.02 5.726-2.586 1.768-5.054 4.62-4.18 6.204 1.88 3.406 14.28 3.606 15.726 0 .686-1.71-1.828-4.608-4.4-6.338"
              stroke="#505965"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="ml-1">{gender}</span>
        </span>
        <span className="flex items-center">
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="16px"
            height="16px"
          >
            <g
              fill="#505965"
              stroke="#505965"
              strokeWidth=".5"
              fillRule="evenodd"
            >
              <path d="M11.436 21.17l-.185-.165a35.36 35.36 0 0 1-3.615-3.801C5.222 14.244 4 11.658 4 9.524 4 5.305 7.267 2 11.436 2c4.168 0 7.437 3.305 7.437 7.524 0 4.903-6.953 11.214-7.237 11.48l-.2.167zm0-18.683c-3.869 0-6.9 3.091-6.9 7.037 0 4.401 5.771 9.927 6.897 10.972 1.12-1.054 6.902-6.694 6.902-10.95.001-3.968-3.03-7.059-6.9-7.059h.001z"></path>
              <path d="M11.445 12.5a2.945 2.945 0 0 1-2.721-1.855 3.04 3.04 0 0 1 .641-3.269 2.905 2.905 0 0 1 3.213-.645 3.003 3.003 0 0 1 1.813 2.776c-.006 1.653-1.322 2.991-2.946 2.993zm0-5.544c-1.378 0-2.496 1.139-2.498 2.542 0 1.404 1.115 2.544 2.495 2.546a2.52 2.52 0 0 0 2.502-2.535 2.527 2.527 0 0 0-2.499-2.545v-.008z"></path>
            </g>
          </svg>
          <span className="ml-1">{distance}</span>
        </span>
      </div>
      <div className="border-y py-[10px] px-[16px] text-[#505965] text-lg">
        <span>{about}</span>
      </div>
    </div>
  );
};
