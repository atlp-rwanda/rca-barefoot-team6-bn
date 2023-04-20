import User from '../database/models/user';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken'
config()
export async function isLoggedIn (req, res, next) {
  // config();

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
    return res.send({ message: 'Invalid Bearer Token', error: err.message }).status(400);
  }
}

export async function verifyEmail (req, res, next) {
  const { token } = req.params;
  const user = await User.findOne({ where: { emailVerificationToken: token } });
  if (!user) {
    return res.status(404).json({ message: 'Email verification failed. Token is invalid or has expired.' });
  }
  req.user = user;
  next();
}

export const isAuthorized = (...requiredRights) => async (req, res, next) => {
  if (!req.user) return res.status(401).send({ message: 'Unauthorized' });
  const { role } = req.user;
  if (!requiredRights.includes(role)) return res.status(403).send({ message: 'Forbidden' });
  next();
}
