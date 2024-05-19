// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../lib/config';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    connection.query('SELECT * FROM user', (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
        return;
      }
      res.status(200).json(results);
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
