import cats from './routes/cats.js';
import candies from './routes/candies.js';
import sauces from './routes/sauces.js';
import notFound from './not-found.js';
import bodyParser from './bodyParser.js';

const routes = {
  cats,
  candies,
  sauces,
};

export default async function (req, res) {
  const parts = req.url.split('/');
  if (parts.length && parts[1] === 'api') {
    req.body = await bodyParser(req);
    const resourceName = parts[parts.length - 1]
    const resource = routes[resourceName];
    if (resource == undefined) {
      notFound(req, res);
      return;
    }
    // const httpMethod = req.method.toLowerCase();
    // const urlSegments = req.url.split('/')
    const route = resource[req.method.toLowerCase()];
    if (route == undefined) {
      notFound(req, res);
      return;
    }




    route(req, res);
    return;
  }

  notFound(req, res);
}
