
export type LikeUser = {
    _id: string,
    name: string,
    gender: string,
    age: number,
    location: any[],
    pictures: string[],
}

export type Match = {
    chat: string,
    user: LikeUser
}

export type User = {
    _id: string
    name: string
    gender: string
    age: number,
    location: any[],
    myLikes: LikeUser[],
    meLikes: LikeUser[],
    matches: Match[],
    pictures: string[],
}

export type UserState = User & {
    authToken: string,
    isLoading: boolean,
    error: string,
} 