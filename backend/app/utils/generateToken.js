import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { RefreshToken } from '../models/index.js';

export default async (user, xsrfToken) => {
  const accessToken = jwt.sign(
    {
      firstname: user.firstname, lastname: user.lastname, email: user.email, xsrfToken,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      algorithm: process.env.ACCESS_TOKEN_ALGORITHM,
      audience: process.env.ACCESS_TOKEN_AUDIENCE,
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN / 1000,
      issuer: process.env.ACCESS_TOKEN_ISSUER,
      subject: user.id.toString(),
    },
  );

  const refreshToken = crypto.randomBytes(128).toString('base64');

  await RefreshToken.create({
    token: refreshToken,
    expiresAt: new Date(Date.now() + parseInt(process.env.REFRESH_TOKEN_EXPIRES_IN, 10)),
    userId: user.id,
  });

  return { accessToken, refreshToken };
};
