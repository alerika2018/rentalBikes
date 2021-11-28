const express = require("express");
const app = express();
const dotenv = require("dotenv");

// handling errors
const createError = require("http-errors");

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
app.use("/api/store", router);
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// const Store = require("./models/store.js");

// app.use((req, res, next) => {
//   next(createError(404, "End-point not found "));
// });
// app.use((req, res, next) => {
//   next(createError(400, "Bad request"));
// });

// app.get("/api/store", (req, res) => {});

// app.post("/api/store", (req, res) => {
//   let StoreSchema = new Store({
//     storeName: req.body.storeName,
//     storeAddress: req.body.storeAddress,
//     storeProvince: req.body.storeProvince,
//     storeCity: req.body.storeCity,
//     storePhone: req.body.storePhone,
//     storeEmail: req.body.storeEmail,
//     storeWebsite: req.body.storeWebsite,
//     storeDescription: req.body.storeDescription,
//     storeHours: req.body.storeHours,
//     storeRentals: req.body.storeRentals,
//   });

//   StoreSchema.save()
//     .then((result) => {
//       res.status(201).json({
//         data: StoreSchema._id,
//       });
//       // res.status(201).send();
//     })
//     .catch((error) => console.log(error)); //res.send(error));
// });
