import * as userDal from '../../db/dal/user.dal'
import {UserInput, UserOutput} from '../../db/models/user.model'

export const signUp = (payload: UserInput): Promise<UserOutput> => {
    return userDal.createUser(payload)
}

export const signIn = (email: string, password: string): Promise<UserOutput> => {
    return userDal.loginUser(email, password)
}    