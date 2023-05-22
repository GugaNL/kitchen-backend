const { SQLDataSource } = require('datasource-sql');
import { ValidationError } from 'apollo-server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-errors';

export class LoginSQLDataSource extends SQLDataSource {
  async insertLogin(email, password) {
    const exists = await this.knex
      .select('*')
      .from('login')
      .where({ email: email });
    if (exists.length > 0) {
      throw new ValidationError('Email já existente');
    }

    const criptedPassword = await bcrypt.hashSync(password, ~~process.env.SALT);

    const response = await this.knex
      .insert({ email: email, password: criptedPassword })
      .into('login');

    return {
      id: response[0],
      email,
    };
  }

  async getUserLogin(email) {
    const response = await this.knex
      .select('*')
      .from('login')
      .where({ email: email });

    if (response.length === 0) {
      throw new ValidationError('Usuário não encontrado');
    }

    return response;
  }

  async login(email, password) {
    const userLogin = await this.getUserLogin(email);
    const { id: userId, password: passwordHash } = userLogin[0];

    const comparePassword = await bcrypt.compare(password, passwordHash);

    if (!comparePassword) {
      throw new AuthenticationError('Senha inválida.');
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: '2d',
    });



    return {
      email,
      userId,
      token,
    };
  }
}
