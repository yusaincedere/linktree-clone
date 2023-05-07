import linkService from '@/service/LinService';

export default async function handler(req, res) {
  const { linkId } = req.body;

  try {
    // Delete the post
    const deletedLink = await linkService.deleteLink(linkId);

    res.status(200).json({ deletedLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}