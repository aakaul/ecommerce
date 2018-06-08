const express = require('express');
const router = express.Router();
const multer = require('multer');
const AdminController = require('../controllers/admin');
const checkAdmin = require('../middleware/check-admin');
const ProductsController = require('../controllers/products');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null,  Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.post("/register", AdminController.admin_signup);
router.post("/login", AdminController.admin_login);


const dashbaordRoutes= express.Router();

router.use('/dashbaord',dashbaordRoutes);

//can only be accesed by admin through the admin_dashboard

//dashbaordRoutes.post("/", checkAdmin, AdminController.admin_dashboard); admin_dashboard does not exist hence throws error

dashbaordRoutes.post("/addproduct", checkAdmin, upload.single('productImage'), ProductsController.products_create_product);

dashbaordRoutes.patch("/:productId", checkAdmin, ProductsController.products_update_product);

dashbaordRoutes.delete("/:productId", checkAdmin, ProductsController.products_delete);

dashbaordRoutes.delete("/:adminId", checkAdmin, AdminController.admin_delete);

 module.exports = router;
