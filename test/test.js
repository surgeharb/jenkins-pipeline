const request = require('supertest');

const app = require('../index.js');

describe('GET /', () => {
  it('respond with hello world', async () => {
    const res = await request(app).get('/').expect('hello world');
  });
});
