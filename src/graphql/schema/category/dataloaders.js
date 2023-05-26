import DataLoader from 'dataloader';

export const makeCategoryDataLoader = (getCategories) => {
  return new DataLoader(async (ids) => {
    const categories = await getCategories();
    return ids.map((id) => categories.find((category) => category.id === id));
  });
};
