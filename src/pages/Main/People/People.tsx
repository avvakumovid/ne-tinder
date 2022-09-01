import React, { useState } from 'react';
import { Card } from './Card';

export const People = () => {
  return (
    <div className="flex relative items-center justify-center w-[75vw] rounded-sm">
      <Card
        about="Занимаюсь инвистициями, учу финский язык, работал в таких фирмах как Паскерчик, Огуречик, предпочитаю  интелектуальный отдых, имею твердый ВЗГЛЯД на все, обладаю очаровательной улыбкой и не откладываю дела на потом"
        age={25}
        distance="55 км от вас"
        gender="Мужчина"
        location="Живет в облаках"
        work="Инженер-замерщик, Циркач"
        name="Сантьяга"
        pictures={[
          'bg-[url(https://sun9-36.userapi.com/impg/t_ARITbrtrkLF8VEXp03SLm33101aKGuvlQkOA/7scGN4GoEUE.jpg?size=780x1040&quality=95&sign=0d1b161e78ca44d0863810e4fa4e9b0f&type=album)]',
        ]}
      />
    </div>
  );
};
