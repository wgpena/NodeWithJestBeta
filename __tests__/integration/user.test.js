import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('Deve ser possivel se cadastrar', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Walter Pena',
        email: 'walter@gamil.com',
        password_hash: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });
});
