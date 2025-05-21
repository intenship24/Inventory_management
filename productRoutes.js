const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

router.post("/", auth, createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

module.exports = router;
