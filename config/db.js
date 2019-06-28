const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MongoURI');

const ConnectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = ConnectDB;
