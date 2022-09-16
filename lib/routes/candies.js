const candies = [
  { name: 'Snickers', type: 'chocolate', style: 'bar' },
  { name: 'Smartiees', type: 'sugar', style: 'pellet' },
  { name: 'twix', type: 'chocolate', style: 'bar' },
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
    const updatedCandy = candies[candies.findIndex((candy) => candy.name === req.body.name)]
    updatedCandy.name = req.body.newName
    res.write(JSON.stringify(candies))
    res.end()
  },

  delete(req, res) {
    candies.pop();
    res.statusCode = 200;
    res.end();
  },
};

