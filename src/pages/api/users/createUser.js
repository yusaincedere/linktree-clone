import userService from "@/service/UserService";

export default async function handler(req, res) {
    const {userName, password, photoUrl} = req.body;
      try {
        const user = await userService.createUser(userName,password,photoUrl);
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}
