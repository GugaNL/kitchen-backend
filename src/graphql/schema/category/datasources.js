const { SQLDataSource } = require('datasource-sql');
import { ValidationError } from 'apollo-server';
import { makeCategoryDataLoader } from './dataloaders';

const MINUTE = 60;

export class CategorySQLDataSource extends SQLDataSource {
  constructor(dbConnection) {
    super(dbConnection);
    this.dataLoader = makeCategoryDataLoader(this.listCategories.bind(this));
  }

  async getCategory(id) {
    const response = await this.knex
      .select('*')
      .from('category')
      .where({ id: id })
      .cache(MINUTE);

    if (response.length === 0) {
      throw new ValidationError('Categoria não encontrada');
    }

    return response[0];
  }

  async listCategories() {
    const response = await this.knex.select('*').from('category').cache(MINUTE);
    return response;
  }

  async insertCategory(title) {
    const exists = await this.knex.select('*').from('category').where({ title: title }).cache(MINUTE);

    if (exists.length > 0) {
      throw new ValidationError('Categoria já existente');
    }

    const response = await this.knex.insert({ title }).into('category');

    return {
      id: response[0],
      title,
    };
  }

  async setCategory(categoryId, categoryData) {
    const exists = await this.knex.select('*').from('category').where({ id: categoryId }).cache(MINUTE);

    if (exists.length === 0) {
      throw new ValidationError('Categoria não encontrada');
    }

    const response = await this.knex.update({ title: categoryData.title }).from('category').where({ id: categoryId }).cache(MINUTE);

    return {
      id: response,
      ...categoryData
    }
  }

  async removeCategory(categoryId) {
    const exists = await this.knex.select('*').from('category').where({ id: categoryId }).cache(MINUTE);

    if (exists.length === 0) {
      throw new ValidationError('Categoria não encontrada');
    }

    const response = await this.knex.delete().from('category').where({ id: categoryId }).cache(MINUTE);

    return response;
  }

  batchLoadCategoryById(id) {
    return this.dataLoader.load(id);
  }
}
