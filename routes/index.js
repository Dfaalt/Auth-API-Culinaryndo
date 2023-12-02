const express = require("express");
const router = express.Router();
const cAuth = require("../handlers");

router.post("/user/register", cAuth.register.register);
router.post("/user/login", cAuth.login.login);
router.put("/user/update/:id", cAuth.update.updateEmail);
router.put("/user/update-fullname/:id", cAuth.update.updateFullname);
router.put("/user/update-username/:id", cAuth.update.updateUsername);
router.delete("/user/delete/:id", cAuth.remove.destroy);
router.get("/user/get/:id", cAuth.getOne.getOne);
router.get("/user/get", cAuth.getAll.getAll);

module.exports = router;