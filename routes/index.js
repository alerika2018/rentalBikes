const router = require("express").Router({ mergeParams: true });

const {
  postStore,
  getStores,
  deleteStore,
  getProductById,
} = require("../middleware/storeController.js");

router.post("/", postStore);
router.get("/", getStores);
router.delete("/:id", deleteStore);
router.get("/:id", getProductById);

module.exports = router;
