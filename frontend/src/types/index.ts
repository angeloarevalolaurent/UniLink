
export type User = {
    handle: string
    name: string
    email: string
}

export type RegisterForm = Pick<User, 'email' | 'handle'| 'name'> & {
    password: string
    password_confirmation: string
}

export type LoginForm = Pick<User, 'email'> & {
    password: string
}