import { BuddySaving } from '../../interfaces/buddy_saving.interface';
import {buddySavingOutput} from '../../../db/models/buddy_saving.model';

export const toBuddySaving = (buddySaving: buddySavingOutput): BuddySaving => {
    return {
        id: buddySaving.id,
        title: buddySaving.title,
        number_of_buddies_invite: buddySaving.number_of_buddies_invite,
        savings_target: buddySaving.savings_target,
        saving_pattern: buddySaving.saving_pattern,
        saving_frequency: buddySaving.saving_frequency,
        saving_start_date: buddySaving.saving_start_date,
        total_money_to_save_in_a_year: buddySaving.total_money_to_save_in_a_year,
        total_money_to_save_in_a_month: buddySaving.total_money_to_save_in_a_month,
        relationship_type_with_buddies: buddySaving.relationship_type_with_buddies,
        user_id: buddySaving.user_id,
        createdAt: buddySaving.createdAt,
        updatedAt: buddySaving.updatedAt,
        deletedAt: buddySaving.deletedAt,
    }
}