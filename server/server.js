const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');

const app = express();
app.use(express.json());

app.use('/', express.static(__dirname + '/../public'));

app.use('/product/:id',
  proxy({ target: 'http://localhost:3001' })
);

// app.use('/:artworkId',
//   proxy({ target: 'http://localhost:3002' })
// );

app.use('/reviews/:id',
  proxy({ target: 'http://localhost:3003' })
);

app.listen(3000, () => console.log('Listening on port 3000'));