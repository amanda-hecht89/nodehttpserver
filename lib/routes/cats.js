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
  post(req, res) {},
};
