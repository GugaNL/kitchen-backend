const recipes = async (_, __, { dataSources }) => {
  const response = dataSources.dbRecipe.listRecipes();
  return response;
};

const recipe = async (_, { id }, { dataSources }) => {
  const response = await dataSources.dbRecipe.getRecipe(id);
  return response;
}

export const recipeResolvers = {
  Query: { recipe, recipes },
  //Mutation: { createCategory, updateCategory, deleteCategory },
};
