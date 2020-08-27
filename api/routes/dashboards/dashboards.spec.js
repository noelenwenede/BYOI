const request = require('supertest');
const app = require("../../app");


describe('Dashboards', () => {

  it('It should get sample dashboards', async (done) => {
    const res = await request(app).get('/dashboards');
    expect(res.statusCode).toEqual(200);
    done();
  })
})
