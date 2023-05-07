import Link from '../models/link';

const linkService = {
  async createLink(userId, linkData) {
    // Check if user has less than 20 links
    const linkCount = await Link.count({ where: { user_id: userId } });
    if (linkCount >= 20) {
      throw new Error('User cannot have more than 20 link');
    }

    // Create the link
    const link = await Link.create({
      ...linkData,
      user_id: userId
    });

    return link;
  },

  async deleteLink(linkId) {
    const deletedRows = await Link.destroy({ where: { id: linkId } });
    return deletedRows > 0;
  },

  async getLinksByUserId(userId) {
    const links = await Link.findAll({ where: { user_id: userId } });
    return links;
  }
};

export default linkService;