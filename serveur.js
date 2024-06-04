const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const indexRouter = require('./routes/index');
const imagesRouter = require('./routes/images');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/images', imagesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});