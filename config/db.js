// const mongoose = require("mongoose");

// const connectToDb = async () => {
//   mongoose.connect(process.env.MONGO_URI)
  
//     .then((conn) => {
//       console.log(`connected to database ${conn.connection.host}`);
//     })
//     .catch((err) => {
//       console.log(err.message);
//       process.exit(1);
//     });
// };

// module.exports = connectToDb;

require('dotenv').config();      // Load environment variables from .env file

const mongoose = require("mongoose");

const connectToDb = async () => {
  mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((conn) => {
      console.log(`connected to database ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectToDb;
