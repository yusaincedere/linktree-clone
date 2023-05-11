import  linkService  from '../../../service/LinService';

export default async function handler(req, res) {
  const { userId, linkData} = req.body;

  try {
    // Create the post
    console.log(userId)
    const link = await linkService.createLink(userId, linkData);
    res.status(201).json({ link });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}