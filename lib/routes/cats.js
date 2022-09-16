const cats = [
  { type: 'Tiger', origin: 'Asia', color: 'orange and black stripes' },
  { type: 'Lion', origin: 'Africa', color: 'tan' },
  { type: 'Mountain Lion', origin: 'America', color: 'tan' },
  { type: 'Panther', origin: 'Asia', color: 'black' },
  { type: 'Cheetah', origin: 'Africa', color: 'tan and black spots' },
];

export default {
  name: 'cats',
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },

  post(req, res) {
    res.setHeader('Content-Type', 'application/json');
    cats.push(req.body);
    res.write(JSON.stringify(cats));
    res.end();
    
  },

  put(req, res) {
    // console.log('sup', )
    const updatedCat = cats[cats.findIndex((cat) => cat.origin === req.body.origin)]
    console.log('great', updatedCat);
    updatedCat.origin = req.body.newOrigin
    res.write(JSON.stringify(cats))
    res.end()
  },

  delete(req, res) {
    const catDelete = cats[cats.findIndex((cat) => cat.type === req.body.type)];
    cats.splice(catDelete, 1);
    res.write(JSON.stringify(cats));
    res.end();

  },
};
