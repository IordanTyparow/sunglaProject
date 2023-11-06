const express = require("express");
const cors = require("cors");

const { PORT } = require("./config/env");
const router = require("./routes");

let app = express();

require("./config/mongooseConfig")();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
