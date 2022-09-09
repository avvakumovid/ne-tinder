import React, { FC, useEffect, useState } from 'react';
import { Chat } from './Chat';
import { Profile } from './Profile';
import { useTypedSelector } from './../../../hook/useTypedSelector';
import { Match } from '../../../types/chat.type';

type Props = {
  id: string;
};

const Right: FC<Props> = ({ id }) => {
  const { matches } = useTypedSelector((state) => state.chats);
  const { _id } = useTypedSelector((state) => state.user);
  const [match, setMatch] = useState<Match | undefined>();

  useEffect(() => {
    if (id) {
      setMatch(matches.find((match) => match.user._id === id));
    }
  }, [id]);
  return (
    <>
      {match ? (
        <div className="flex flex-row w-[75vw] bg-white">
          <Chat
            userId={_id}
            picture="bg-[url(https://sun9-36.userapi.com/impg/t_ARITbrtrkLF8VEXp03SLm33101aKGuvlQkOA/7scGN4GoEUE.jpg?size=780x1040&quality=95&sign=0d1b161e78ca44d0863810e4fa4e9b0f&type=album)]"
            name={match?.user.name}
            date="21.02.2022"
            match={match}
          />
          <Profile
            about="Занимаюсь инвистициями, учу финский язык, работал в таких фирмах как Паскерчик, Огуречик, предпочитаю  интелектуальный отдых, имею твердый ВЗГЛЯД на все, обладаю очаровательной улыбкой и не откладываю дела на потом"
            age={match.user.age}
            distance="55 км от вас"
            gender={match.user.gender}
            location="Живет в облаках"
            work="Инженер-замерщик, Циркач"
            name={match.user.name}
            pictures={match.user.pictures.map(
              (p) => `http://127.0.0.1:5000/api/file/${p} `
            )}
          />
        </div>
      ) : null}
    </>
  );
};

export default Right;
