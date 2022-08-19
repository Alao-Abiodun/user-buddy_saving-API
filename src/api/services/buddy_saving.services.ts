import * as buddySavingDal from '../../db/dal/buddy_savings.dal'
import {buddySavingInput, buddySavingOutput} from '../../db/models/buddy_saving.model'

// create a buddy_saving given a buddy_saving input
export const savings = (payload: buddySavingInput): Promise<buddySavingOutput> => {
    return buddySavingDal.createBuddySaving(payload)
}
