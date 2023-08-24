import DataLoader from 'dataloader';

export const makeImageDataLoader = (getImages) => {
  return new DataLoader(async (ids) => {
    const images = await getImages();
    return ids.map((id) => images.find((image) => image.id === id));
  });
};
