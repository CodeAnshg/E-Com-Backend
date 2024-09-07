const { signup, login } = require("../controllers/AuthController");
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/AuthValidation");
const router = require("express").Router(); // Yahaan () add karna zaruri hai

router.post("/login", loginValidation, login); // Ensure login function is defined
router.post("/signup", signupValidation, signup);

module.exports = router;
