const DataLoader = require('dataloader')

const makeImageDataLoader = (getImages) => {
  return new DataLoader(async (ids) => {
    const images = await getImages();
    return ids.map((id) => images.find((image) => image.id === id));
  });
};

module.exports = {
  makeImageDataLoader
}
