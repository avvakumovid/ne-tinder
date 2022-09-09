
import { io } from 'socket.io-client';

export class Socket {


    public socket: any
    public disptch: any

    constructor(url: string, token: string, func: any) {
        this.socket = io(url, {
            extraHeaders: {
                Authorization: `Bearer ${token}`
            },

        })
        this.socketOn(func)

    }

    socketOn(func: (payload: any) => {}) {
        this.socket.on('message', (message: any) => {

            func(message)
        })
    }

    emit(type: string, payload: any) {
        this.socket.emit(type, {
            id: this.socket.id,
            userId: payload.userId,
            chatId: payload.chatId,
            message: payload.message
        })
    }

}