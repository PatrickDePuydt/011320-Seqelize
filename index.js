const express = require('express');
const methodOverride = require('method-override');
const layouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Default Routes
app.get('/', (req, res) => {
  res.send('Home');
});

app.use('/users', require('./routes/user_controller'));

app.get('/*', (req, res) => {
  res.send('404');
});

app.listen(8000, () => console.log(`🙌`));