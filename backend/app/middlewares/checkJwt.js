import jwt from 'jsonwebtoken';
import { AuthError } from '../error/apiError.js';
import { User } from '../models/index.js';

export default async (req, res, next) => {
  try {
    const { headers, cookies } = req;

    console.log('access_token', cookies.access_token);
    console.log('refresh_token', cookies.refresh_token);

    if (!cookies || !cookies.access_token) {
      throw new AuthError('Missing token in cookie', '', 0);
    }

    const accessToken = cookies.access_token;

    if (!headers || !headers['x-xsrf-token']) {
      throw new AuthError('Missing XSRF token in header', '', 0);
    }

    const xsrfToken = headers['x-xsrf-token'];

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, {
      algorithms: process.env.ACCESS_TOKEN_ALGORITHM,
    });

    if (xsrfToken !== decoded.xsrfToken) {
      throw new AuthError('Invalid XSRF token', '', 0);
    }

    const userId = decoded.sub;
    const user = await User.findByPk(userId);

    if (!user) {
      throw new AuthError('User not found', '', 0);
    }

    req.user = user;

    return next();
  } catch (err) {
    next(err);
  }
};
