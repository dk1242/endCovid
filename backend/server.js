const express = require("express");
const mongoose = require("mongoose");
const helpRouter = require("./routes/HelpRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded());
app.use(express.json());

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(helpRouter);
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
