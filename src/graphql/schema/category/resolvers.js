const category = async (_, { id }, { dataSources }) => {
  const response = await dataSources.db.getCategory(id);
  return response;
};

const categories = async (parent, args, { dataSources }) => {
  const response = await dataSources.db.listCategories();
  return response;
};

const createCategory = async (_, { data }, { dataSources }) => {
  const { title = '' } = data;
  const response = await dataSources.db.insertCategory(title);
  return response;
};

const updateCategory = async (_, { categoryId, data }, { dataSources }) => {
  const response = await dataSources.db.setCategory(categoryId, data);
  return response;
};

const deleteCategory = async (_, { categoryId }, { dataSources }) => {
  const response = await dataSources.db.removeCategory(categoryId);
  return response;
};

export const categoryResolvers = {
  Query: { category, categories },
  Mutation: { createCategory, updateCategory, deleteCategory },
};
