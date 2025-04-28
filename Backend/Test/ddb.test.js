const request = require('supertest');
const app = require('../server');
const Job = require('../src/Model/Job');

describe('Database Read/Write', () => {
  it('POST /api/jobs (write)', async () => {
    const res = await request(app)
      .post('/api/jobs')
      .send({
        title: "Test Job",
        description: "Test DB Write",
        location: "Test City",
        postedBy: "test_user_id"
      });
    expect(res.statusCode).toEqual(201);
  });

  it('GET /api/jobs (read)', async () => {
    const res = await request(app).get('/api/jobs');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});