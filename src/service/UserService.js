import User from "../models/User";
import bcrypt from 'bcrypt';

const userService = {
    async checkUserExists(userName) {
        const user = await User.findOne({ where: { user_name: userName } });
        return !!user;
    },
    async createUser(userName, password, photoUrl) {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ user_name: userName, password: encryptedPassword, photo_url: photoUrl });
        return user;
    },
    async getUserByUserName(userName) {
        const user = await User.findOne({ where: { user_name: userName } });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    },
    async signIn(userName, password) {
        const user = await User.findOne({ where: { user_name: userName } });
        if (!user) {
          throw new Error('Invalid email');
        }
    
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          throw new Error('Invalid password');
        }
        return user;
      }
    };

export default userService;