const { SQLDataSource } = require('datasource-sql');
import { ValidationError } from 'apollo-server';
import { makeImageDataLoader } from './dataloaders';
//const path = require('path');
//const fs = require('fs');

const MINUTE = 60;

export class ImageSQLDataSource extends SQLDataSource {
  constructor(dbConnection) {
    super(dbConnection);
    this.dataLoader = makeImageDataLoader(this.listImages.bind(this));
  }

  async listImages() {
    const response = await this.knex.select('*').from('image').cache(MINUTE);
    return response;
  }

  async getImage(id) {
    const response = await this.knex
      .select('*')
      .from('image')
      .where({ id: id })
      .cache(MINUTE);

    if (response.length === 0) {
      throw new ValidationError('Imagem não encontrada');
    }

    return response[0];
  }

  // async insertImage(file) {
  //   const {
  //     createReadStream,
  //     filename = '',
  //     mimetype = '',
  //     encoding = 0,
  //     //path = '',
  //     recipe_id = '',
  //   } = file;

  //   const exists = await this.knex
  //     .select('*')
  //     .from('image')
  //     .where({ recipe_id: recipe_id })
  //     .cache(MINUTE);

  //   if (exists.length === 0) {
  //     throw new ValidationError('Imagem não encontrada');
  //   }

  //   const stream = createReadStream();
  //   const pathName = path.join(
  //     __dirname,
  //     `../../../../resources/uploads/${filename}`,
  //   );
  //   await stream.pipe(fs.createWriteStream(pathName));

  //   const response = await this.knex
  //     .insert({ filename, mimetype, encoding, path: pathName, recipe_id })
  //     .into('image');

  //   return {
  //     id: response[0],
  //     ...file,
  //   };
  // }

  // async setImage(imageId, imageData) {
  //   const { recipe_id } = imageData;

  //   const existsRecipe = await this.knex
  //     .select('*')
  //     .from('recipe')
  //     .where({ id: recipe_id })
  //     .cache(MINUTE);

  //   if (existsRecipe.length === 0) {
  //     throw new ValidationError('Receita não encontrada');
  //   }

  //   const existsImage = await this.knex
  //     .select('*')
  //     .from('image')
  //     .where({ id: imageId })
  //     .cache(MINUTE);

  //   if (existsImage.length === 0) {
  //     throw new ValidationError('Imagem não encontrada');
  //   }

  //   const response = await this.knex
  //     .update(imageData)
  //     .from('image')
  //     .where({ id: imageId })
  //     .cache(MINUTE);

  //   return {
  //     id: response,
  //     ...imageData,
  //   };
  // }

  // async removeImage(imageId) {
  //   const exists = await this.knex
  //     .select('*')
  //     .from('image')
  //     .where({ id: imageId })
  //     .cache(MINUTE);

  //   if (exists.length === 0) {
  //     throw new ValidationError('Imagem não encontrada');
  //   }

  //   const response = await this.knex
  //     .delete()
  //     .from('image')
  //     .where({ id: imageId })
  //     .cache(MINUTE);

  //   return response;
  // }

  batchLoadImageById(id) {
    return this.dataLoader.load(id);
  }
}
