const { SQLDataSource } = require('datasource-sql');
import { ValidationError } from 'apollo-server';

const MINUTE = 60;

export class RecipeSQLDataSource extends SQLDataSource {
  async listRecipes() {
    const response = await this.knex.select('*').from('recipe').cache(MINUTE);
    return response;
  }
}
