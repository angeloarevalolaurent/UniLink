
export type User = {
    handle: string
    name: string
    email: string
    description: string
    _id: string
    image:string
    links:string
}

export type UserHandle = Pick<User, 'description'|'handle'|'image'|'links'|'name'>

export type UpdateProfilePayload = Pick<User, 'handle' | 'description' | 'image' | 'links'>


export type RegisterForm = Pick<User, 'email' | 'handle'| 'name'> & {
    password: string
    password_confirmation: string
}

export type LoginForm = Pick<User, 'email'> & {
    password: string
}

export type ProfileForm = Pick<User, 'handle' | 'description'>


export type SocialNetwork ={
    id:number
    name: string
    url: string
    enabled: boolean
}

export type UniLink = Pick<SocialNetwork, 'name' | 'url'| 'enabled'>

