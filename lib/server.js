const express = require('express');
const config = require('./config');

const app = express();
// add ejs engine
app.set('view engine', 'ejs');

//set default template
app.use(express.static('public'));
//set main route
app.get('/', (req, res) => {
  res.render('index', {
    //pass variables to ejs
    port: config.port
  });
});

app.listen(config.port, () => console.info(`Running on port ${config.port}`));