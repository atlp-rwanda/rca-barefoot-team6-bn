import User from '../database/models/user';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken'

export async function authMiddleware (req, res, next) {
  config();

  const header = req.header('Authorization');
  if (!header || !header.startsWith('Bearer ')) { return res.send({ message: 'Token Not Found' }).status(401); }

  const token = header.split(' ')[1];
  if (!token) return res.send({ message: 'Invalid Bearer Token' }).status(400);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id: decoded.id } });
    if (!user) return res.status(404).send({ message: 'Invalid User Account' });
    req.user = user;
    next();
  } catch (err) {
    return res.send({ message: 'Invalid Bearer Token' }).status(400);
  }
}
