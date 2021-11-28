const router = require("express").Router({ mergeParams: true });

const {
  postStore,
  getStores,
  deleteStore,
  getProductById,
} = require("../middleware/storeController.js");

const validations = require("../validators");

// app.post("/orders", validations.validators("body"), (req, res) => {
//   if (res.locals.error == undefined) {
//     res.render("success", { order: res.locals.value });
//   } else {
//     res.status(422).render("error", { details: res.locals.error.details });
//   }
// });

router.post("/", validations.validators(), postStore);
router.get("/", getStores);
router.delete("/:id", deleteStore);
router.get("/:id", getProductById);

module.exports = router;
