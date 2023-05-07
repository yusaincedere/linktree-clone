import linkService from '@/service/LinService';

export default async function handler(req, res) {
  const { userId } = req.body;

  try {
    console.log(userId)
    // Retrieve all links for the user
    const links = await linkService.getLinksByUserId(userId);
    res.status(200).json({ links });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}