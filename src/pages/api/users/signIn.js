import userService from "@/service/UserService";


export default async function handler(req, res) {
    const {userName,password} = req.body;

    try {
        const user = await userService.signIn(userName,password);
        res.status(200).json(user);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
}

