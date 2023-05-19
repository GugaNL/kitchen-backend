const { SQLDataSource } = require('datasource-sql');
import { ValidationError } from 'apollo-server';

const MINUTE = 60;

export class RecipeSQLDataSource extends SQLDataSource {
  async listRecipes() {
    const response = await this.knex.select('*').from('recipe').cache(MINUTE);
    return response;
  }

  async getRecipe(id) {
    const response = await this.knex
      .select('*')
      .from('recipe')
      .where({ id: id })
      .cache(MINUTE);

    if (response.length === 0) {
      throw new ValidationError('Receita não encontrada');
    }

    return response[0];
  }

  async insertRecipe(data) {
    const { title = '', image = '', rating = 0, duration = '', ingredients = '', prepare = '', category } = data;

    const exists = await this.knex.select('*').from('recipe').where({ title: title }).cache(MINUTE);

    if (exists.length > 0) {
      throw new ValidationError('Receita já existente');
    }

    const existsCategory = await this.knex.select('*').from('category').where({ id: category }).cache(MINUTE);

    if (existsCategory.length === 0) {
      throw new ValidationError('Categoria não encontrada');
    }

    const response = await this.knex.insert({ title, image, rating, duration, ingredients, prepare, category_id: category }).into('recipe');

    return {
      id: response[0],
      ...data
    }
  }


  async setRecipe(recipeId, recipeData) {
    const { category_id } = recipeData;

    const exists = await this.knex.select('*').from('recipe').where({ id: recipeId }).cache(MINUTE);

    if (exists.length === 0) {
      throw new ValidationError('Receita não encontrada');
    }

    const existsCategory = await this.knex.select('*').from('category').where({ id: category_id }).cache(MINUTE);

    if (existsCategory.length === 0) {
      throw new ValidationError('Categoria não encontrada');
    }

    const response = await this.knex.update(recipeData).from('recipe').where({ id: recipeId }).cache(MINUTE);

    return {
      id: response,
      ...recipeData
    }
  }


  async removeRecipe(recipeId) {
    const exists = await this.knex.select('*').from('recipe').where({ id: recipeId }).cache(MINUTE);

    if (exists.length === 0) {
      throw new ValidationError('Receita não encontrada');
    }

    const response = await this.knex.delete().from('recipe').where({ id: recipeId }).cache(MINUTE);

    return response;
  }
}
