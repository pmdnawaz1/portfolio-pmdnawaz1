import { getPostData } from '../../../lib/posts';

export default async function handler(req, res) {
    const { slug } = req.query;

    try {
        const postData = await getPostData(slug);

        if (!postData) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json(postData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch post' });
    }
}
