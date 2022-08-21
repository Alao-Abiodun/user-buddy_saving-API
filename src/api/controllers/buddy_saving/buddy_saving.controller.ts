import * as service from '../../services/buddy_saving.services'
import {CreateBuddySavingDTO} from '../../dto/buddy_saving.dto'
import {BuddySaving} from '../../interfaces/buddy_saving.interface'
import * as mapper from './mapper'

export const create = async(payload: CreateBuddySavingDTO): Promise<BuddySaving> => {
    return mapper.toBuddySaving(await service.savings(payload))
}

// export const invite = async(name): Promise<BuddySaving> => {
//     return mapper.toBuddySaving(await service.signIn(email, password))
// }

