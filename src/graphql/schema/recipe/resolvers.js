const recipes = async (_, __, { dataSources }) => {
  const response = dataSources.dbRecipes.listRecipes();
  return response;
};


export const recipeResolvers = {
  Query: { recipes },
  //Mutation: { createCategory, updateCategory, deleteCategory },
};
