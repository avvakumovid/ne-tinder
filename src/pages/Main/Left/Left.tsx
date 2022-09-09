import React, { useState } from 'react';
import Header from './components/Header';
import Likes from './components/Likes';
import { Couple } from './components/Couple';
import { Dialog } from './components/Dialog';
import { HideDialog } from './components/HideDialog';
import { useTypedSelector } from './../../../hook/useTypedSelector';

export default function Left() {
  const [tab, setTab] = useState('couple');
  const { myLikes } = useTypedSelector((state) => state.user);
  const { matches } = useTypedSelector((state) => state.chats);
  return (
    <div className="w-[25vw] min-h-screen max-h-screen z-20  overflow-hidden bg-white border-r">
      <Header />
      <div className="flex py-3 px-5 box-border items-center">
        <button
          className={
            'px-2 items-center justify-center mr-4 ' +
            (tab === 'couple'
              ? 'border-b-[3px] border-[#ff4458]'
              : 'border-b-[3px] border-white')
          }
          onClick={() => {
            setTab('couple');
          }}
        >
          <span className="text-center font-extrabold">Пары</span>
        </button>
        <button
          className={
            'px-2 items-center justify-center mr-4 ' +
            (tab !== 'couple'
              ? 'border-b-[3px] border-[#ff4458]'
              : 'border-b-[3px] border-white')
          }
          onClick={() => {
            setTab('messages');
          }}
        >
          <span className="font-extrabold">Сообщения</span>
        </button>
      </div>
      {tab === 'couple' ? (
        <div className="flex flex-wrap p-2 overflow-auto no-scrollbar h-[calc(100vh-138px)]">
          <Likes likescount={myLikes.length} />
          {matches.map((match) => (
            <Couple
              avatar={`bg-[url(http://127.0.0.1:5000/api/file/${match.user.pictures[0]})]`}
              name={match.user.name}
            />
          ))}
        </div>
      ) : (
        <>
          <HideDialog
            isVerification={false}
            name="Сантьяга"
            message="Привет дружочек!"
            picture="bg-[url(https://sun9-36.userapi.com/impg/t_ARITbrtrkLF8VEXp03SLm33101aKGuvlQkOA/7scGN4GoEUE.jpg?size=780x1040&quality=95&sign=0d1b161e78ca44d0863810e4fa4e9b0f&type=album)]"
          />
          {matches.map((match) => (
            <Dialog
              userId={match.user._id}
              isVerification={false}
              key={match.chat.chatId}
              name={match.user.name}
              message={
                match.chat.messages[match.chat.messages.length - 1].message
              }
              picture={`bg-[url(http://127.0.0.1:5000/api/file/${match.user.pictures[0]})] `}
              pictur={`http://127.0.0.1:5000/api/file/${match.user.pictures[0]}`}
            />
          ))}
          <Dialog
            userId="s"
            isVerification={false}
            name="Михаил"
            message="Привет дружочек!"
            pictur="s"
            picture=" bg-[url(http://sun9-62.userapi.com/impg/okDGs07TXOI5KRL2zFEqVO52sjwDRezB0uIe5Q/Gg0OUCiRCeo.jpg?size=961x1280&quality=96&sign=afaaf650b816d5c4439e47a718426107&type=album)]"
          />
        </>
      )}
    </div>
  );
}
