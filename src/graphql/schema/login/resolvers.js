const register = async (_, { data }, { dataSources }) => {
  const { email = '', password = '' } = data;
  const response = await dataSources.dbLogin.insertLogin(email, password);
  return response;
};

const login = async (_, { data }, { dataSources }) => {
  const { email, password } = data;
  return await dataSources.dbLogin.login(email, password);
};

const logout = async (_, { email }, { dataSources }) => {
  return dataSources.dbLogin.logout(email);
};

const loginResolvers = {
  Mutation: { register, login, logout },
};

module.exports = {
  login, logout, loginResolvers
}
