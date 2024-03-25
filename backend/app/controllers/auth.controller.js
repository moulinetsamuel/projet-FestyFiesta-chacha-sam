import crypto from 'crypto';
import { User } from '../models/index.js';
import { AuthError } from '../error/apiError.js';
import generateToken from '../utils/generateToken.js';

export default {

  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AuthError('Missing Email or Password');
    }

    const user = await User.authenticate(email, password);

    if (!user) {
      throw new AuthError('Invalid Email or Password');
    }

    const xsrfToken = crypto.randomBytes(64).toString('hex');

    const { accessToken, refreshToken } = await generateToken(user, xsrfToken);

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: false,
      maxAge: process.env.ACCESS_TOKEN_EXPIRES_IN,
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: false,
      maxAge: process.env.REFRESH_TOKEN_EXPIRES_IN,
      // path: '/login',
    });

    res.status(200).json({
      accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
      refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
      xsrfToken,
    });
  },
};
