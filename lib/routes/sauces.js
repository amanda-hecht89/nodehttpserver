const sauces = [
    { name: 'BBQ', type: 'full', color: 'brown' },
    { name: 'Sweet & Sour', type: 'sweet', color: 'orange' },
    { name: 'Honey Mustard', type: 'tangy', color: 'tellow' },
    { name: 'Ketchup', type: 'full', color: 'blue' },
    { name: 'Horsey', type: 'tangy', color: 'white' },
  ];

  export default {
    name: 'sauces',
    get(req, res) {
      res.write(JSON.stringify(sauces));
      res.end();
    },
  
    post(req, res) {
      res.setHeader('Content-Type', 'application/json');
      sauces.push(req.body);
      res.write(JSON.stringify(sauces));
      res.end();
      
    },
  
    put(req, res) {
      const updatedSauce = sauces[sauces.findIndex((sauce) => sauce.origin === req.body.origin)]
      updatedSauce.origin = req.body.newOrigin
      res.write(JSON.stringify(sauces))
      res.end()
    },
  
    delete(req, res) {
      const sauceDelete = sauces[sauces.findIndex((sauce) => sauce.type === req.body.type)];
      sauces.splice(sauceDelete, 1);
      res.write(JSON.stringify(sauces));
      res.end();
  
    },
  };
  