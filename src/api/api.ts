import axios from 'axios';

export type RegistrationBody = {
    "email": string,
    "password": string,
    "name": string,
    "birthdate": string
}

export class API {
    private static instance = axios.create({
        baseURL: 'http://localhost:5000/api/'
    })

    public static registration = async (body: RegistrationBody) => {
        const response = await this.instance.post('/registration', body)
        return response.data
    }
}