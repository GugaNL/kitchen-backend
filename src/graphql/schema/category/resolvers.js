const category = async (_, { id }, { dataSources }) => {
  const response = await dataSources.dbCategory.getCategory(id);
  return response;
};

const categories = async (parent, args, { dataSources }) => {
  const response = await dataSources.dbCategory.listCategories();
  return response;
};

const createCategory = async (_, { data }, { dataSources }) => {
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

export const categoryResolvers = {
  Query: { category, categories },
  Mutation: { createCategory, updateCategory, deleteCategory },
};
