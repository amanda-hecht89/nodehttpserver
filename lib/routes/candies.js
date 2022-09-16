const candies = [
  { name: 'Snickers', type: 'chocolate', style: 'bar' },
  { name: 'Smartiees', type: 'sugar', style: 'pellet' },
  { name: 'Twix', type: 'chocolate', style: 'bar' },
  { name: 'Jelly Belly', type: 'jelly', style: 'bean' },
];

export default {
  name: 'candies',
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },

  post(req, res) {
    res.setHeader('Content-Type', 'application/json');
    candies.push(req.body);
    res.write(JSON.stringify(candies));
    res.end();
    
  },

  put(req, res) {
    const updatedCandy = candies[candies.findIndex((candy) => candy.style === req.body.style)]
    updatedCandy.style = req.body.newStyle
    res.write(JSON.stringify(candies))
    res.end()
  },

  delete(req, res) {
    const candyDelete = candies[candies.findIndex((candy) => candy.name === req.body.name)];
    cats.splice(candyDelete, 1);
    res.write(JSON.stringify(candy));
    res.end();

  },
};

