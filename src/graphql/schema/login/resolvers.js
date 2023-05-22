const register = async (_, { data }, { dataSources }) => {
  const { email = '', password = '' } = data;
  const response = await dataSources.dbLogin.insertLogin(email, password);
  return response;
};

export const login = async (_, { data }, { dataSources }) => {
  const { email, password } = data;
  return dataSources.dbLogin.login(email, password);
};

export const logout = async (_, { email }, { dataSources }) => {
  return dataSources.dbLogin.logout(email);
};

export const loginResolvers = {
  Mutation: { register, login, logout },
};
