const { number } = require("joi");
const mongoose = require("mongoose");
const validator = require("validator");

const bikeRentalsSchema = new mongoose.Schema({
  position: {
    type: Number,
  },
  bikeType: {
    type: String,
  },
  bikeDescription: {
    type: String,
  },
  bikeTime: {
    type: String,
  },
  bikePrice: {
    type: Number,
  },
  bikeTime2: {
    type: String,
  },
  bikePrice2: {
    type: Number,
  },
  bikeTime3: {
    type: String,
  },
  bikePrice3: {
    type: Number,
  },
});

const storeSchema = new mongoose.Schema(
  {
    storeName: {
      type: String,
    },
    storeAddress: {
      type: String,
    },
    storeProvince: {
      type: String,
    },
    storeCity: {
      type: String,
    },
    storePhone: {
      type: String,
    },
    storeEmail: {
      type: String,
    },
    storeWebsite: {
      type: String,
    },
    storeDescription: {
      type: String,
    },
    storeHours: {
      type: Array,
    },
    storeRentals: [bikeRentalsSchema],
    latLng: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
  // {
  //   writeConcern: {
  //     j: true,
  //     wtimeout: 1000,
  //   },
  // }
);

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
