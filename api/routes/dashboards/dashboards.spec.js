const request = require('supertest');
const app = require("../../app");


describe('Dashboards', () => {

  it('It should get sample dashboards', async (done) => {
    const res = await request(app).get('/ping');
    expect(res.statusCode).toEqual(200);
    done();
  })
})
