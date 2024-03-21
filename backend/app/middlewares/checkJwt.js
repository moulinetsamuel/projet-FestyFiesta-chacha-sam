import jwt from 'jsonwebtoken';
import ApiError from '../error/apiError.js';
import { User } from '../models/index.js';

export default async (req, res, next) => {
  try {
    const { headers } = req;
    /* 1. On vérifie que le header Authorization est présent dans la requête */
    if (!headers || !headers.authorization) {
      throw new ApiError(401, 'Missing Authorization header');
    }

    /* 2. On vérifie que le header Authorization contient bien le token */
    const [scheme, token] = headers.authorization.split(' ');

    if (!scheme || scheme.toLowerCase() !== 'bearer' || !token) {
      throw new ApiError(401, 'Header format is Authorization: Bearer token');
    }

    /* 3. On vérifie et décode le token à l'aide du secret et de l'algorithme utilisé pour le générer */
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    /* 4. On vérifie que l'utilisateur existe bien dans notre base de données */
    const userId = decodedToken.id;
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      throw new ApiError(401, `User ${userId} not exists`);
    }

    /* 5. On passe l'utilisateur dans notre requête afin que celui-ci soit disponible pour les prochains middlewares */
    req.user = user;

    /* 7. On appelle le prochain middleware */
    return next();
  } catch (err) {
    next(err);
  }
};
