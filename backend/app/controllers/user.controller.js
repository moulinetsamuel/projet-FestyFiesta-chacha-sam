import bcrypt from 'bcrypt';
import { User } from '../models/index.js';
import generateController from '../utils/generatController.js';
import { UserError } from '../error/apiError.js';

const controllerUserGeneric = generateController(User);

const controllerUser = {
  ...controllerUserGeneric,

  async create(req, res) {
    // dans le front pas oublier de demander a retaper le mdp pour confirmer
    // et comparer avec le mdp entrée
    const {
      email, password, firstname, lastname,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.NB_OF_SALT_ROUNDS, 10));

    const user = await User.create({
      email,
      password: hashedPassword,
      firstname,
      lastname,
    });
    res.status(201).json(user);
  },

  async update(req, res) {
    const id = Number(req.params.id);

    if (!id) {
      throw new UserError('Invalid parameter id');
    }

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.NB_OF_SALT_ROUNDS, 10));
    }

    const [nbUpdated, dataUpdated] = await User.update(req.body, {
      where: {
        id,
      },
      returning: true,
    });

    if (nbUpdated === 0) {
      throw new UserError('This user does not exist', '', 0);
    }

    res.json(dataUpdated[0]);
  },
};

export default controllerUser;
