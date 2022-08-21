import { Op } from 'sequelize';
import { User } from '../models/user.model';
import { UserInput, UserOutput } from '../models/user.model';
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

// create user with bcrypt
export const createUser = async (user: UserInput): Promise<UserOutput> => {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password as string, 12);
    const newUser = await User.create({ name, email, password: hashedPassword });
    return newUser;
}

// login user with jsonwebtoken and check if password is correct
export const loginUser = async (email: string, password: string): Promise<any> => {    
    const user = await User.findOne({ where: { email } });
    console.log('USER: ',user);
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        throw new Error('Password is incorrect');
    }

    // const token: string | number = jsonwebtoken.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return {...user.dataValues }; 
}
