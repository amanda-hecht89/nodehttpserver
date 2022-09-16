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
    expect(res.body.find(cat => cat.type === newCat.type)).toEqual(newCat)
  });

  it('PUT /cats updates details', async () => {
    const updateCat = {
      origin: 'America'
    };
    const res = await request(app).put('/api/v1/cats').send(updateCat);
    expect(res.status).toBe(200);
  });

  it('DELETE should delete a cat', async () => {
    const deleteCat = {
      type: 'Panther', 
      origin: 'Asia', 
      color: 'black'
    };
    const res = await request(app).delete('/api/v1/cats').send(deleteCat);
    expect(res.status).toBe(200);
  })

  it('GET returns candies route', async () => {
    await request(app)
    .get('/api/v1/candies')
    .expect(200)
  });

  it('POST add new candy', async () => {
     const newCandy = {
      name: 'Laffy Taffy',
      type: 'fruit',
      style: 'taffy',
    }
    const res = await request(app)
    .post('/api/v1/candies')
    .send(newCandy)
    .expect(200)
    expect(res.body.find(candy => candy.name === newCandy.name)).toEqual(newCandy)
  });

  it('PUT /candies updates details', async () => {
    const updateCandy = {
      name: 'twix'
    };
    const res = await request(app).put('/api/v1/candies').send(updateCandy);
    expect(res.status).toBe(200);
  });

  it('DELETE /candies deletes candy object', async () => {
    const deleteCandy = {
      name: 'Snickers', 
      type: 'chocolate', 
      style: 'bar'
    };
    const res = await request(app).delete('/api/v1/candies').send(deleteCandy);
    expect(res.status).toBe(200);
  });
  
  
  
  
  














