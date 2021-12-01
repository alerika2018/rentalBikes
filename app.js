const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const connectDB = require("./connection.js");

connectDB.once("open", () => {
  const server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = require("./routes/index.js");
app.use("/api/v1/store", router);
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
