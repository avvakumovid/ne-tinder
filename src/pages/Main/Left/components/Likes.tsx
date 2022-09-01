import React, { FC } from 'react';

type props = {
  likescount: number;
};

const Likes: FC<props> = ({ likescount }) => {
  return (
    <div className="w-[30%] z-30 box-border h-32 border-4 rounded-md border-[#e6af16] flex items-end m-[1.5%] relative">
      <div className="absolute m-auto top-0 left-0 bottom-0 blur-sm right-0 h-[97%] w-[97%] rounded-md   bg-cover bg-[url('https://images-ssl.gotinder.com/62f351fd8ee7bf01007a89da/640x800_75_bc933f1e-3972-4e6d-a823-fa1a5ac4c7e6.webp')]"></div>
      <div
        className="w-10 h-10 bg-gradient-to-r from-[#c1920f]  via-[#e6af16] to-[#f7d472] rounded-full 
      flex justify-center items-center absolute m-auto top-0 left-0 bottom-0 right-0 "
      >
        <span className="z-10 text-white font-extrabold ">{likescount}</span>
      </div>
      <span className="z-10 text-white font-extrabold ml-2">
        {likescount} лайк
      </span>
    </div>
  );
};
export default Likes;
