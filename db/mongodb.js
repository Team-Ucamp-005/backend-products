const mongoose = require('mongoose');


const url = process.env.URL_MONGO_DB;

mongoose.connect(url, {}, () => {
  console.log('----------------------')
  console.log('Conexión a la base de datos exitosa')
  console.log('----------------------')
})

module.exports = mongoose;