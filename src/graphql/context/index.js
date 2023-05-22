import jwt from 'jsonwebtoken';

const authorizeLogin = (req) => {
  if (!req || !req.headers || !req.headers.authorization) return '';

  const { headers } = req;
  const { authorization } = headers;

  try {
    const [_bearer, token] = authorization.split(' ');
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    return userId;
  } catch (error) {
    return ''
  }
};

export const context = ({ req }) => {
  const loggedUserId = authorizeLogin(req);

  return {
    loggedUserId,
  };
};
