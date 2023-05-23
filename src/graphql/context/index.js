import jwt from 'jsonwebtoken';

const verifyJwtToken = async (token) => {
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    return userId;
  } catch (error) {
    return '';
  }
};

const authorizeLogin = async (req) => {
  if (!req || !req.headers || !req.headers.authorization) return '';

  const { headers } = req;
  const { authorization } = headers;

  try {
    const [_bearer, token] = authorization.split(' ');
    return await verifyJwtToken(token);
  } catch (error) {
    return '';
  }
};

export const context = async ({ req, res }) => {
  let loggedUserId = await authorizeLogin(req);

  if (!loggedUserId) {
    loggedUserId = '';
  }

  return {
    loggedUserId,
    res,
  };
};
