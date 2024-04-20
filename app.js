require("dotenv").config();
require("express-async-errors");
const express = require("express");
const databaseConnection = require("./db/connect");
const errorHandler = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

const app = express();

app.use(express.json());
// extra packages

// routes
app.get("/", (req, res) => {
  res.send("jobs api");
});

// MIDWARES
app.use(notFoundMiddleware);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await databaseConnection(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
