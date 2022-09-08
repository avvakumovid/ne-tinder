import axios, { AxiosResponse } from 'axios';
import { User } from '../types/user.type';

export type RegistrationBody = {
    "email": string,
    "password": string,
    "name": string,
    "birthdate": string
}

export type LoginBody = {
    email: string,
    password: string
}

export class API {
    private static instance = axios.create({
        baseURL: 'http://localhost:5000/api/'
    })

    public static registration = async (body: RegistrationBody) => {
        const response = await this.instance.post('/registration', body)
        return response.data
    }

    public static login = async (body: LoginBody) => {
        const data = await (await this.instance.post('/login', body)).data
        localStorage.setItem('authToken', data.access_token)
        return data
    }

    public static getUserInfo = async (token: string) => {
        const { data } = await this.instance.get('/info', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        
        return data
    }
}