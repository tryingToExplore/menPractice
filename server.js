const express = require("express");
const playerRoutes = require("./routes/players");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// enable cross-origin resource sharing through CORS middleware


// request log middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/players", playerRoutes);

// Connect to local MongoDB instance
mongoose
  .connect("mongodb://localhost:27017/players")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Example app listening on port " + port);
    });
  })
  .catch((err) => console.error("Failed to connect", err));