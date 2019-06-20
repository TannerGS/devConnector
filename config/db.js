const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MongoURI');

const ConnectDB = async () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true
    });

    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = ConnectDB;
