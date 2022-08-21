import { User }  from './models/user.model'
import { BuddySaving } from './models/buddy_saving.model'

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => {
  User.sync({ alter: isDev || isTest })
  BuddySaving.sync({ alter: isDev || isTest })
}
export default dbInit 