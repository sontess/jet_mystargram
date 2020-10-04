const express = require('express');
const hbs = require('express-handlebars');
const router = require('./routes/index');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3080;

app.use(express.static(path.join(__dirname,'public')));
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

app.use('/',router);

app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  

