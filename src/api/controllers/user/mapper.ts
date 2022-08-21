import { User } from '../../interfaces/user.interface';
import {UserOutput} from '../../../db/models/user.model';

export const toUser = (user: UserOutput): User => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    }
}