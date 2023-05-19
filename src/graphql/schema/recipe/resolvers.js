const DataLoader = require('dataloader');

//Category field
// const category = async ({ id: category_id }, _, { dataSources }) => {
//   const response = await dataSources.dbCategory.getCategory(category_id);
//   return response;
// };

const category = async ({ id: category_id }, _, { dataSources }) => {
  const categoryLoader = new DataLoader(async (keys) => {
    const result = keys.map(async (categoryId) => {
      const response = await dataSources.dbCategory.getCategory(categoryId);
      return response;
    });

    return Promise.resolve(result);
  });

  return categoryLoader.load(category_id);
};

const recipes = async (_, __, { dataSources }) => {
  const response = dataSources.dbRecipe.listRecipes();
  return response;
};

const recipe = async (_, { id }, { dataSources }) => {
  const response = await dataSources.dbRecipe.getRecipe(id);
  return response;
};

export const recipeResolvers = {
  Query: { recipe, recipes, category },
  Recipe: { category },
  //Mutation: { createCategory, updateCategory, deleteCategory },
};
