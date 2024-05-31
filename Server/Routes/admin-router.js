const express = require("express");
const  adminController= require("../contollers/admin-controller");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();

router
  .route("/users")
  .get(authMiddleware,adminMiddleware,adminController.getAllUsers);

  router
  .route("/contacts")
  .get( adminController.getAllContacts);

  router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);
  
router
.route("/users/update/:id")
.patch(authMiddleware, adminMiddleware, adminController.updateUserById);

  router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
  router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);
   
  router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

module.exports = router;
