const category = async ({ id: category_id }, _, { dataSources }) => {
  return dataSources.dbCategory.batchLoadCategoryById(category_id);
};

const recipes = async (_, __, { dataSources }) => {
  const response = dataSources.dbRecipe.listRecipes();
  return response;
};

const recipe = async (_, { id }, { dataSources }) => {
  const response = await dataSources.dbRecipe.getRecipe(id);
  return response;
};

const createRecipe = async (_, { data }, { dataSources }) => {
  const response = await dataSources.dbRecipe.insertRecipe(data);
  return response;
};

const updateRecipe = async (_, { recipeId, data }, { dataSources }) => {
  const response = await dataSources.dbRecipe.setRecipe(recipeId, data);
  return response;
};

const deleteRecipe = async (_, { recipeId }, { dataSources }) => {
  const response = await dataSources.dbRecipe.removeRecipe(recipeId);
  return response;
};

export const recipeResolvers = {
  Query: { recipe, recipes },
  Recipe: { category },
  Mutation: { createRecipe, updateRecipe, deleteRecipe },
};
