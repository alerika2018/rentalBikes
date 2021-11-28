const { number } = require("joi");
const mongoose = require("mongoose");
const validator = require("validator");

const bikeRentalsSchema = new mongoose.Schema({
  position: {
    type: Number,
    required: [true],
  },
  bikeType: {
    type: String,
    required: [true, "Please enter bike type"],
  },
  bikeDescription: {
    type: String,
    maxLength: 2000,
  },
  bikeTime: {
    type: String,
    required: [true, "Please enter the first time option"],
  },
  bikePrice: {
    type: Number,
    required: [true, "Please enter cost for the first time option"],
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
      required: [true, "Please enter store name"],
      minLength: 2,
      maxLength: 100,
    },
    storeAddress: {
      type: String,
      required: [true, "Please enter the store address"],
      minLength: 2,
      maxLength: 250,
    },
    storeProvince: {
      type: String,
      required: [true, "Please enter the province"],
      minLength: 2,
      maxLength: 50,
    },
    storeCity: {
      type: String,
      required: [true, "Please enter the city"],
      minLength: 2,
      maxLength: 50,
    },
    storePhone: {
      type: String,
    },
    storeEmail: {
      type: String,
      required: [true, "Please enter your email"],
      validate: [
        {
          validator: function (email) {
            return validator.isEmail(email);
          },
          messages: `Please enter a valid email`,
        },
      ],
    },
    storeWebsite: {
      type: String,
      validate: [
        {
          validator: function (website) {
            return validator.isURL(website);
          },
          messages: `Please enter a valid website`,
        },
      ],
    },
    storeDescription: {
      type: String,
      minLength: 2,
      maxLength: 2000,
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
);

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
