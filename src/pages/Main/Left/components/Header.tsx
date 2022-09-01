import React from 'react';

import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hook/useTypedSelector';
import { setPage } from '../../../../store/slices/main.slice';

export default function Header() {
  const { page } = useTypedSelector((state) => state.main);
  const dispatch = useDispatch();
  return (
    <div className="flex min-w-full h-[87px] bg-gradient-to-r from-[#fd267a]  to-[#ff6036]">
      <div className="w-1/2 flex items-center ">
        <div className="w-[36px] h-[36px] mr-2 ml-4 rounded-full bg-center bg-[length:36px] bg-[url('https://images-ssl.gotinder.com/62f351fd8ee7bf01007a89da/640x800_75_bc933f1e-3972-4e6d-a823-fa1a5ac4c7e6.webp')] "></div>

        <span className="text-white font-semibold">Иван</span>
      </div>
      <div className="w-1/2 flex items-center justify-end">
        <div
          onClick={() => {
            dispatch(setPage('people'));
          }}
          className="w-[40px] h-[40px] mr-4 rounded-full bg-[#00000052] flex justify-center items-center"
        >
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            fill="white"
          >
            <path
              d="M19.272 9.872V4.707A.708.708 0 0 0 18.564 4h-5.66a.707.707 0 0 0-.707.707v5.038a6.495 6.495 0 0 1 2.434-.878 6.664 6.664 0 0 1 4.64 1.005Zm1.131 7.57 2.123 1.57a1.062 1.062 0 0 1-1.175 1.77l-.085-.064-2.122-1.578h-.042a5.037 5.037 0 1 1-5.886-8.065h-.057a4.952 4.952 0 0 1 1.726-.594 5.023 5.023 0 0 1 3.226.594h-.064a5.002 5.002 0 0 1 2.562 3.672v-.036a5.03 5.03 0 0 1-.312 2.66l.106.071Zm-5.89.404c.473.223 1.001.302 1.518.226h-.021a2.639 2.639 0 0 0 2.25-3.021 2.646 2.646 0 1 0-3.746 2.795ZM3.708 13.197h5.66a6.678 6.678 0 0 0 .708 5.943v.424a.707.707 0 0 1-.708.708h-5.66A.708.708 0 0 1 3 19.564v-5.66a.707.707 0 0 1 .707-.707Zm0-9.197h5.66c.39 0 .708.317.708.707v5.66c0 .39-.317.708-.708.708h-5.66A.707.707 0 0 1 3 10.367v-5.66c0-.39.317-.707.707-.707Z"
              fill="var(--color--icon-overlay, inherit)"
            ></path>
          </svg>
        </div>
        <div className="w-[40px] h-[40px] mr-4 rounded-full bg-[#00000052] flex justify-center items-center">
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            fill="white"
          >
            <path d="M3 19.869C3 20.547 3.7 21 4.5 21h15c.8 0 1.5-.453 1.5-1.131v-7.016H3v7.016zm11.6-14.03v.565h-5c-.2 0-.3-.34-.3-.566v-.566c0-.452.4-.792.8-.792h4c.3 0 .6.34.6.792v.566h-.1zm4.8.565H16c.2-.226.2-.34.2-.566v-.566c0-1.357-1-2.262-2.3-2.262H10c-1-.114-2 .792-2 2.15v1.13H4.5c-.8.114-1.5.906-1.5 1.698v3.055h18V7.988c0-.905-.7-1.584-1.6-1.584z"></path>
          </svg>
        </div>
        <div className="w-[40px] h-[40px] mr-4 rounded-full bg-[#00000052] flex justify-center items-center">
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            fill="white"
          >
            <path d="M5.768 5.052c-1.593 0-2.529-.61-2.529-.61S.71 14.723 12.091 22c11.38-7.277 8.851-17.558 8.851-17.558s-.935.61-2.529.61c-1.593 0-3.793-.61-6.322-3.052-2.53 2.442-4.755 3.052-6.323 3.052z"></path>
          </svg>
        </div>
      </div>
      <div></div>
    </div>
  );
}
