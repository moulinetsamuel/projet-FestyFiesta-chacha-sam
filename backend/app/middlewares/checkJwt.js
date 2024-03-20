import jwt from 'jsonwebtoken';

const extractToken = (authorization) => {
  if (typeof authorization !== 'string') {
    throw new Error('Authorization header missing or not a string');
  }
  const matches = authorization.match(/(Bearer)\s+(\S+)/i);
  if (!matches) {
    throw new Error('Bearer token not found in Authorization header');
  }
  return matches[2];
};

const checkJwt = (req, res, next) => {
  try {
    const token = req.headers.authorization && extractToken(req.headers.authorization);

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.error('Error during JWT verification:', error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default checkJwt;
