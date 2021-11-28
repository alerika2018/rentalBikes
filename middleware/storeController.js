const Store = require("../models/store.js");

const postStore = (req, res) => {
  let StoreSchema = new Store({
    storeName: req.body.storeName,
    storeAddress: req.body.storeAddress,
    storeProvince: req.body.storeProvince,
    storeCity: req.body.storeCity,
    storePhone: req.body.storePhone,
    storeEmail: req.body.storeEmail,
    storeWebsite: req.body.storeWebsite,
    storeDescription: req.body.storeDescription,
    storeHours: req.body.storeHours,
    storeRentals: req.body.storeRentals,
    latLng: req.body.latLng,
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
  Store.find(
    {}
    // {
    //   _id: 1,
    //   storeName: 1,
    // }
  )
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

module.exports = { postStore, getStores, deleteStore, getProductById };
