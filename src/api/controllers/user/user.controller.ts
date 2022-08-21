import * as service from '../../services/user.services'
import {CreateUserDTO} from '../../dto/user.dto'
import {User} from '../../interfaces/user.interface'
import * as mapper from './mapper'

export const create = async(payload: CreateUserDTO): Promise<User> => {
    return mapper.toUser(await service.signUp(payload))
}

export const login = async(email: string, password: string): Promise<User> => {
    return mapper.toUser(await service.signIn(email, password))
}

