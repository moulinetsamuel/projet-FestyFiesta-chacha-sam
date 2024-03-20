import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

export default {

  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send('Bad Request - Missing Params');
      return;
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(404).send('Not Found');
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).send('Unauthorized');
      return;
    }

    const token = jwt.sign({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_DURATION });
    res.json({ token });
  },
};
