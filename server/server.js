const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const parser = require('body-parser');
app.use(parser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('bookings');
  const guestCollection = db.collection('guests');
  const guestRouter = createRouter(guestCollection);
  app.use('/api/guests', guestRouter); 
})
.catch(console.error);

app.listen(3000, function(){
  console.log(`Listening on port ${this.address().port}`);
})