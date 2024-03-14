import bcrypt from 'bcrypt';
import emailValidator from 'email-validator';
import { User } from '../models/index.js';
import generateController from '../utils/generatController.js';

const controllerUserGeneric = generateController(User);

const controllerUser = {
  ...controllerUserGeneric,

  async create(req, res) {
    try {
      // dans le front pas oublier de demander a retaper le mdp pour confirmer
      // et comparer avec le mdp entrée
      const {
        email, password, firstname, lastname, confirmPassword,
      } = req.body;

      if (!emailValidator.validate(email)) {
        res.status(400).send('Bad Request - Invalid Email');
        return;
      }

      // Vérifier que le Mot de passe et sa confirmation sont égaux
      if (password !== confirmPassword) {
        res.status(400).send('Les deux mots de passe fournis ne correspondent pas.');
        return;
      }

      const alreadyExist = await User.findOne({ where: { email } });
      if (alreadyExist) {
        res.status(400).send("L'email fourni est déjà utilisé.");
        return;
      }

      const NB_OF_SALT_ROUNDS = parseInt(process.env.NB_OF_SALT_ROUNDS, 10);
      const hashedPassword = await bcrypt.hash(password, NB_OF_SALT_ROUNDS);

      const user = await User.create({
        email,
        password: hashedPassword,
        firstname,
        lastname,
      });
      res.status(201).json(user);
    } catch (error) {
      console.trace(error);
      res.status(500).send('Internal Server Error');
    }
  },

  async update(req, res) {
    try {
      if (req.body.password) {
        const NB_OF_SALT_ROUNDS = parseInt(process.env.NB_OF_SALT_ROUNDS, 10);
        req.body.password = await bcrypt.hash(req.body.password, NB_OF_SALT_ROUNDS);
      }

      if (req.body.email) {
        if (!emailValidator.validate(req.body.email)) {
          res.status(400).send('Bad Request - Invalid Email');
          return;
        }
      }
      const [nbUpdated, dataUpdated] = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });

      if (nbUpdated === 0) {
        res.status(404).send('Not Found');
        return;
      }

      res.json(dataUpdated[0]);
    } catch (error) {
      console.trace(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

export default controllerUser;
