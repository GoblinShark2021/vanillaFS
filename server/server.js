const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api.js");

const app = express();
const PORT = 3000;

//setting up mongo db
const URI =
  "mongodb+srv://mongoboys:12345@cluster0.xeqlo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "todov1",
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connected fam!");
});

//middleware
app.use(express.json());

//serve static css files, etc
app.use(express.static(__dirname + "../.."));

//route handlers
app.use("/api", apiRouter); //

// app.get("/test", function (req, res) {
//   console.log("good request");
//   res.status(200).send("You on the backend playa");
// });

//root get request
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: "Internal Server Error" });
});

//server start with listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
