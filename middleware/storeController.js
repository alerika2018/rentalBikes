const Store = require("../models/store.js");

const postStore = (req, res) => {
  let StoreSchema = new Store({
    storeName: res.locals.value.storeName,
    storeAddress: res.locals.value.storeAddress,
    storeProvince: res.locals.value.storeProvince,
    storeCity: res.locals.value.storeCity,
    storePhone: res.locals.value.storePhone,
    storeEmail: res.locals.value.storeEmail,
    storeWebsite: res.locals.value.storeWebsite,
    storeDescription: res.locals.value.storeDescription,
    storeHours: res.locals.value.storeHours,
    storeRentals: res.locals.value.storeRentals,
    latLng: res.locals.value.latLng,
  });

  StoreSchema.save()
    .then((result) => {
      res.status(201).json({
        data: StoreSchema._id,
      });

      console.log("Store saved");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
};

const getStores = (req, res) => {
  if (
    Object.keys(req.query).length == 0 ||
    Object.values(req.query)[0] == false
  ) {
    Store.find({})
      .exec()
      .then((results) => {
        let rest = [];
        for (i = 0; i < results.length; i++) {
          let newData = {
            data: results[i],
          };

          rest.push(newData);
        }
        res.status(200).json(rest);
      })
      .catch((error) => console.log(error));
  } else {
    Store.find({
      storeName: { $regex: ".*" + req.query.storeName + ".*", $options: "i" },
    })
      .exec()
      .then((results) => {
        let rest = [];
        for (i = 0; i < results.length; i++) {
          let newData = {
            data: results[i],
          };

          rest.push(newData);
        }
        res.status(200).json(rest);
      })
      .catch((error) => console.log(error));
  }
};

const deleteStore = (req, res) => {
  Store.deleteOne({ _id: req.params.id })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error });
    });
};

const getProductById = (req, res) => {
  Store.findOne({ _id: req.params.id })
    .exec()
    .then((result) => {
      res.json({
        data: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error });
    });
};

module.exports = {
  postStore,
  getStores,
  deleteStore,
  getProductById,
};
