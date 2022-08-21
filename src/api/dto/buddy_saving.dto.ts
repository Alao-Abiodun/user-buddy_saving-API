import { Optional } from "sequelize/types"

export type CreateBuddySavingDTO = {
    title: string;
    number_of_buddies_invite: number;
    savings_target: boolean;
    saving_pattern: string;
    saving_frequency: string;
    saving_start_date: Date;
    total_money_to_save_in_a_year: number;
    total_money_to_save_in_a_month: number;
    relationship_type_with_buddies: string;
    user_id: number;ame: string;
    email?: string;
    password: string;
}