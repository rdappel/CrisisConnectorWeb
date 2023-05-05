const express = require('express'); // requires goes to the node_modules (when there is no ./ it goes to the node folder)
const routes = require('./Routes');
const app = express(); 
const path = require('path');

const root = 'Static'
express.json();
app.use(express.static(root));
app.use('/', routes);

app.listen(3000, () => console.log('Server running: http://localhost:3000'));