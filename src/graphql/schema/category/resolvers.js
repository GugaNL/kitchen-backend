const { AuthenticationError } = require('apollo-server')

const category = async (_, { id }, { dataSources }) => {
  const response = await dataSources.dbCategory.getCategory(id);
  return response;
};

const categories = async (parent, args, { dataSources }) => {
  const response = await dataSources.dbCategory.listCategories();
  return response;
};

const createCategory = async (_, { data }, { dataSources, loggedUserId }) => {
  if (!loggedUserId) {
    throw new AuthenticationError('Usuário sem permissão');
  }
  const { title = '' } = data;
  const response = await dataSources.dbCategory.insertCategory(title);
  return response;
};

const updateCategory = async (_, { categoryId, data }, { dataSources }) => {
  const response = await dataSources.dbCategory.setCategory(categoryId, data);
  return response;
};

const deleteCategory = async (_, { categoryId }, { dataSources }) => {
  const response = await dataSources.dbCategory.removeCategory(categoryId);
  return response;
};

const categoryResolvers = {
  Query: { category, categories },
  Mutation: { createCategory, updateCategory, deleteCategory },
};

module.exports = {
  categoryResolvers
}
