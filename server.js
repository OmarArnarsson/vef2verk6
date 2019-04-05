/* todo setja upp server */

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const {
  PORT: port = 3000,
  HOST: host = '127.0.0.1',
  DATABASE_URL: data = 'postgres://notandi:mypass@localhost/v2',
} = process.env;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/:id', (req, res) => {
      app.render(req, res, '/todo', { id: req.params.id });
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
});
