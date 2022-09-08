import React, { useState } from 'react';
import { Card } from './Card';

export const People = () => {
  return (
    <div className="flex relative items-start justify-center w-[75vw] pt-10 rounded-sm">
      <Card
        zIndex={1}
        about="Занимаюсь инвистициями, учу финский язык, работал в таких фирмах как Паскерчик, Огуречик, предпочитаю  интелектуальный отдых, имею твердый ВЗГЛЯД на все, обладаю очаровательной улыбкой и не откладываю дела на потом"
        age={25}
        distance="55 км от вас"
        gender="Мужчина"
        location="Живет в облаках"
        work="Инженер-замерщик, Циркач"
        name="Сантьяга"
        avatars={[
          'https://sun9-36.userapi.com/impg/t_ARITbrtrkLF8VEXp03SLm33101aKGuvlQkOA/7scGN4GoEUE.jpg?size=780x1040&quality=95&sign=0d1b161e78ca44d0863810e4fa4e9b0f&type=album',
        ]}
        pictures={[
          'bg-[url(https://sun9-36.userapi.com/impg/t_ARITbrtrkLF8VEXp03SLm33101aKGuvlQkOA/7scGN4GoEUE.jpg?size=780x1040&quality=95&sign=0d1b161e78ca44d0863810e4fa4e9b0f&type=album)]',
        ]}
      />
      <Card
        zIndex={2}
        about="Занимаюсь инвистициями, учу финский язык, работал в таких фирмах как Паскерчик, Огуречик, предпочитаю  интелектуальный отдых, имею твердый ВЗГЛЯД на все, обладаю очаровательной улыбкой и не откладываю дела на потом"
        age={24}
        distance="55 км от вас"
        gender="Мужчина"
        location="Живет в облаках"
        work="Инженер-замерщик, Циркач"
        name="Майкл"
        avatars={[
          'https://sun9-36.userapi.com/impg/t_ARITbrtrkLF8VEXp03SLm33101aKGuvlQkOA/7scGN4GoEUE.jpg?size=780x1040&quality=95&sign=0d1b161e78ca44d0863810e4fa4e9b0f&type=album',
        ]}
        pictures={[
          'bg-[url(https://sun9-62.userapi.com/impg/okDGs07TXOI5KRL2zFEqVO52sjwDRezB0uIe5Q/Gg0OUCiRCeo.jpg?size=961x1280&quality=96&sign=afaaf650b816d5c4439e47a718426107&type=album)]',
        ]}
      />
    </div>
  );
};
