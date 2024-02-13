const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/config.js')

// TIODO: Check if user exists
exports.register = (userData) => User.create(userData)
