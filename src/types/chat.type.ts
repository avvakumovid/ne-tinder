
import { Chat } from './../pages/Main/Messages/Chat';
import { User } from './user.type';
export type Message = {
    date: Date,
    message: string,
    author: string;
}


export type Match = {
    user: User,
    chat: Chat
}

export type Chat = {

    chatId: string,
    users: string[],
    messages: Message[]
}

export type ChatsState = {
    isLoading: boolean,
    error: string,
    matches: Match[]
}


export type AddMessagePayload = {
    chatId: string,
    message: Message
}