require("dotenv").config();
require("express-async-errors");
const express = require("express");
// DB CONNECTION
const databaseConnection = require("./db/connect");

// MIDDLEWARES
const errorHandler = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

// ROUTERS
const routerAuth = require("./routes/auth");
const routerJobs = require("./routes/jobs");

const app = express();

app.use(express.json());
// extra packages

// routes
app.use("/api/v1/auth/", routerAuth);
app.use("/api/v1/jobs/", routerJobs);

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
