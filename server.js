const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true })
const express = require('express');
const url = 'https://www.aimeleondore.com/collections/shop-all';

const app = express();
const port = process.env.PORT || 3001;

nightmare
  .goto(url)
  .wait('body')
  .evaluate(() => document.querySelector('.grid-uniform').innerHTML)
  .end()
  .then((res) => {
    console.log(res);
  });




app.listen(port, () => console.log(`Listening on port ${port}`));