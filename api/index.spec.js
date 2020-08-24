const request = require('supertest');
const app = require("./app");


describe('API is live', () => {
    jest.useFakeTimers()

    it('API should be alive', async (done) => {
        const res = await request(app).get('/ping');
        expect(res.statusCode).toEqual(200);
        done();
    })

})


