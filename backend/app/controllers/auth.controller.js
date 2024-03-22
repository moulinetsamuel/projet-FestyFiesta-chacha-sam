import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import { AuthError } from '../error/apiError.js';

export default {

  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AuthError('Missing Email or Password');
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new AuthError('User or Password incorrect', '', 0);
    }

    const isPasswordValid = await User.checkPassword(password, user.password);
    if (!isPasswordValid) {
      throw new AuthError('User or Password incorrect', '', 0);
    }

    const token = jwt.sign({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_DURATION });

    res.status(200).json({ token });
  },
};
