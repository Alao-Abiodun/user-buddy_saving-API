import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import { User } from './user.model';

interface buddySavingAttributes {
    id: number;
    title: string;
    number_of_buddies_invite: number;
    savings_target: boolean;
    saving_pattern: string;
    saving_frequency: string;
    saving_start_date: Date;
    total_money_to_save_in_a_year: number;
    total_money_to_save_in_a_month: number;
    relationship_type_with_buddies: string;
    user_id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface buddySavingInput extends Optional<buddySavingAttributes, 'id' | 'title' | 'number_of_buddies_invite' | 'savings_target' | 'saving_pattern' | 'saving_frequency' | 'saving_start_date' | 'total_money_to_save_in_a_year' | 'total_money_to_save_in_a_month' | 'relationship_type_with_buddies' | 'user_id'> {}

export interface buddySavingOutput extends Required<buddySavingAttributes> {}

class BuddySaving extends Model<buddySavingAttributes, buddySavingInput> implements buddySavingAttributes {
    public id!: number
    public title!: string
    public number_of_buddies_invite!: number
    public savings_target!: boolean
    public saving_pattern!: string
    public saving_frequency!: string
    public saving_start_date!: Date
    public total_money_to_save_in_a_year!: number
    public total_money_to_save_in_a_month!: number
    public relationship_type_with_buddies!: string
    public user_id!: number
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

// buddySaving with relationships to user and buddy

BuddySaving.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number_of_buddies_invite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    savings_target: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    saving_pattern: {
        type: DataTypes.STRING,
        allowNull: false
    },
    saving_frequency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    saving_start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total_money_to_save_in_a_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_money_to_save_in_a_month: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    relationship_type_with_buddies: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})
// .belongsTo(User, { foreignKey: 'user_id' });

BuddySaving.belongsTo(User, { foreignKey: {
    allowNull: false,
    field: 'user_id',
} });

export { BuddySaving }
