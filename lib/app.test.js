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
  });

  it('PUT should update cat', async () => {
    const res = await request(app).put('/api/v1/cats/2').send({
      origin: 'North America'
    });
    expect(res.status).toBe(200);
    expect(res.body.origin).toBe('North America')
  });

  it('DELETE should delete a cat', async () => {
    const res = await request(app).delete('/api/v1/cats/4');
    expect(res.status).toBe(200);
    const catResp = await request(app).get('/api/v1/cats/4');
    expect(catResp.status).toBe(404);
  })











  it




  it


















