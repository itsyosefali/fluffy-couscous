import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      'https://your-frappe-backend.com/api/resource/Customers',
      {
        auth: {
          username: process.env.BROWSERSLIST,
          password: 'your-frappe-password',
        },
      }
    );

    res.status(200).json({ data: response.data.data });
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
}
