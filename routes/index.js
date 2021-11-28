const router = require("express").Router({ mergeParams: true });

const {
  postStore,
  getStores,
  deleteStore,
  getProductById,
} = require("../middleware/storeController.js");

const validations = require("../validators");

router.post("/", validations.validators, postStore);
router.get("/", getStores);
router.delete("/:id", deleteStore);
router.get("/:id", getProductById);

module.exports = router;
