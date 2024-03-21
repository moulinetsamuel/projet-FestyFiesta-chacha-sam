import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import ApiError from '../error/apiError.js';

export default {

  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(400, 'Bad Request - Missing Params');
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new ApiError(401, 'User or Password is invalid');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ApiError(401, 'User or Password is invalid');
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
