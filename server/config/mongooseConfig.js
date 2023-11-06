const mongoose = require("mongoose");

let url = `mongodb://localhost:27017/sungla`;

module.exports = () => mongoose.connect(url).then(() => {
    console.log("dataBase connected!");
  });
