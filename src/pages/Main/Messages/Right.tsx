import React from 'react';
import { Chat } from './Chat';
import { Profile } from './Profile';

export default function Right() {
  return (
    <div className="flex flex-row w-[75vw]">
      <Chat
        picture="bg-[url(https://sun9-36.userapi.com/impg/t_ARITbrtrkLF8VEXp03SLm33101aKGuvlQkOA/7scGN4GoEUE.jpg?size=780x1040&quality=95&sign=0d1b161e78ca44d0863810e4fa4e9b0f&type=album)]"
        name="Сантьяга"
        date="21.02.2022"
      />
      <Profile
        about="Занимаюсь инвистициями, учу финский язык, работал в таких фирмах как Паскерчик, Огуречик, предпочитаю  интелектуальный отдых, имею твердый ВЗГЛЯД на все, обладаю очаровательной улыбкой и не откладываю дела на потом"
        age={25}
        distance="55 км от вас"
        gender="Мужчина"
        location="Живет в облаках"
        work="Инженер-замерщик, Циркач"
        name="Сантьяга"
        pictures={[
          'https://sun9-36.userapi.com/impg/t_ARITbrtrkLF8VEXp03SLm33101aKGuvlQkOA/7scGN4GoEUE.jpg?size=780x1040&quality=95&sign=0d1b161e78ca44d0863810e4fa4e9b0f&type=album',
        ]}
      />
    </div>
  );
}
