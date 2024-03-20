import bcrypt from 'bcrypt';
import { User } from '../models/index.js';
import generateController from '../utils/generatController.js';
import ApiError from '../../error/apiError.js';

const controllerUserGeneric = generateController(User);

const controllerUser = {
  ...controllerUserGeneric,

  async create(req, res) {
    // dans le front pas oublier de demander a retaper le mdp pour confirmer
    // et comparer avec le mdp entrée
    const {
      email, password, firstname, lastname,
    } = req.body;

    const NB_OF_SALT_ROUNDS = parseInt(process.env.NB_OF_SALT_ROUNDS, 10);
    const hashedPassword = await bcrypt.hash(password, NB_OF_SALT_ROUNDS);

    const user = await User.create({
      email,
      password: hashedPassword,
      firstname,
      lastname,
    });
    res.status(201).json(user);
  },

  async update(req, res, next) {
    if (req.body.password) {
      const NB_OF_SALT_ROUNDS = parseInt(process.env.NB_OF_SALT_ROUNDS, 10);
      req.body.password = await bcrypt.hash(req.body.password, NB_OF_SALT_ROUNDS);
    }

    const [nbUpdated, dataUpdated] = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    if (nbUpdated === 0) {
      return next(new ApiError(400, 'User not found'));
    }

    res.json(dataUpdated[0]);
  },
};

export default controllerUser;
