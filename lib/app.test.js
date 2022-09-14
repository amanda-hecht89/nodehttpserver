import request from 'supertest';
import app from './app.js';


  it('Returns 404 not found on bad route', async () => {
    const { text, status } = await request(app).get('/not-found');
  
    expect(status).toBe(404);
    expect(text).toBe('Not Found');
  });

  it('GET returns cats route', async () => {
    await request(app)
    .get('/api/v1/cats')
    .expect(200)
  });

  it('POST add new cat', async () => {
     const newCat = {
      type: 'puma',
      origin: 'Americas',
      color: 'tri-colored',
    }

    const res = await request(app)
    .post('/api/v1/cats')
    .send(newCat)
    .expect(200)
    console.log(res.body);
    expect(res.body.find(cat => cat.type === newCat.type)).toEqual(newCat)
  })











  it




  it


















