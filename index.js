import http from 'node:http'
import dotenv from 'dotenv'
import app from './lib/app.js'

dotenv.config();
const server = http.createServer(app);
const port = process.env.APP_PORT || 8080;
const hostname = process.env.APP_HOST || 'localhost';

const log = (...args) => {
    // Don't log in tests because Jest doesn't like that and will fail your tests.
    if(process.env['NODE_ENV'] !== 'test') {
      console.log(('[server]'), ...args);
    }
  }

server.listen(port, hostname, () => {
    log(`Server listening on ${JSON.stringify(server.address())}!`)
});
log('Im Listening Oh Great Amanda');

