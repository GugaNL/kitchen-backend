const category = async ({ category_id = null }, _, { dataSources }) => {
  if (category_id) {
    return dataSources.dbCategory.batchLoadCategoryById(category_id);
  }
};

const recipes = async (_, __, { dataSources }) => {
  const response = await dataSources.dbRecipe.listRecipes();
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

export const imageUpload = async (_, { file }, { dataSources }) => {
  const response = await dataSources.dbImage.insertImage(file);
  return response;
};

const image = async ({ image_id = null }, _, { dataSources }) => {
  if (image_id) {
    return dataSources.dbImage.batchLoadImageById(image_id);
  }
};

export const recipeResolvers = {
  Query: { recipe, recipes },
  Recipe: { category, image },
  Mutation: { createRecipe, updateRecipe, deleteRecipe },
};
