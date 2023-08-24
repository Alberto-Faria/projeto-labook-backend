export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export enum POST_LIKE {
    ALREADY_LIKED = "ALREADY LIKED",
    ALREADY_DISLYKE = "ALREADY DISLIKED"
}

export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES,
    created_at: string
}

export interface UserModel {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES,
    createdAt: string
}

export interface PostDB {
    id: string,
    creator_id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    update_at: string
}

export interface PostModel {
    id: string,
    creator_id: string,
    content: string,
    likes: number,
    dislikes: number,
    createdAt: string,
    updateAt: string,
    creator: {
        id: string,
        name: string
    }
}

export interface TokenPayload {
    id: string,
    name: string,
    role: USER_ROLES
}

export interface PostWithCreatorDB extends PostDB {
    creator_name: string
}

export interface LikeDslikeDB {
    user_id: string,
    post_id: string,
    like: number
}
