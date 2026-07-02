const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes/index");
const errorHandler = require("./utils/errorHandler");
const connectToDb = require("./config/db.config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// if any request comes and route start with /api , we map it to apiRouter
app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem service is alive" });
});

// last middleware if nay error comes
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`server is running on PORT :${PORT}`);
  await connectToDb();
  console.log("Successfully connected to DB");


});
