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
}
