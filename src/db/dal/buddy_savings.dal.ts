import { Op } from 'sequelize';
import { BuddySaving } from '../models/buddy_saving.model';
import { buddySavingInput, buddySavingOutput } from '../models/buddy_saving.model';

// create a buddy_saving given a buddy_saving input
export const createBuddySaving = async (buddySaving: buddySavingInput): Promise<buddySavingOutput> => {
    const { title, number_of_buddies_invite, savings_target, saving_pattern, saving_frequency, saving_start_date, total_money_to_save_in_a_year, total_money_to_save_in_a_month, relationship_type_with_buddies, user_id } = buddySaving;

    const newBuddySaving = await BuddySaving.create({ title, number_of_buddies_invite, savings_target, saving_pattern, saving_frequency, saving_start_date, total_money_to_save_in_a_year, total_money_to_save_in_a_month, relationship_type_with_buddies, user_id });
    return newBuddySaving;
}

export const inviteBuddy = async (title: string): Promise<any> => {
    
}