import User from "../models/user";

const userService = {
    async checkUserExists(userName) {
      const user = await User.findOne({ where: { user_name:userName} });
      return !!user;
    },
    async createUser(userName, password, photoUrl) {
      const user = await User.create({ user_name:userName, password:password, photo_url:photoUrl });
      return user;
    },
    async signIn(userName, password) {
      const user = await User.findOne({ where: { user_name:userName } });
      if (!user || user.password !== password) {
        throw new Error('Invalid email or password');
      }
      return user;
    }
  };

  export default userService;