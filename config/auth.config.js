// config/auth.config.js
const dotenv = require("dotenv");

module.exports = {
    secret: process.env.JWT_SECRET_KEY, // This should be in environment variables in production
    expiresIn: "1h"
};