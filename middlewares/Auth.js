const jwt = require("jsonwebtoken");

const EnsureAuthenticated = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res
      .status(403) // Changed from .state to .status
      .json({ message: "Unauthorized, JWT token is required" });
  }

  try {
    // The token is usually prefixed with "Bearer ", so remove it if present
    const token = auth.startsWith("Bearer ")
      ? auth.slice(7, auth.length)
      : auth;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(401) 
      .json({ message: "Unauthorized, JWT token wrong or expired" });
  }
};

module.exports = EnsureAuthenticated;
