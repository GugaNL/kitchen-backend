const DataLoader = require('dataloader')

const makeCategoryDataLoader = (getCategories) => {
  return new DataLoader(async (ids) => {
    const categories = await getCategories();
    return ids.map((id) => categories.find((category) => category.id === id));
  });
};

module.exports = {
  makeCategoryDataLoader
}
