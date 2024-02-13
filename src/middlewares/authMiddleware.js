const jwt = require('../lib/jwt.js');
const { SECRET } = require('../config/config.js');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = await jwt.verify(token, SECRET);

        req.user = decodedToken;
        res.locals.isAuthenticated = true;

        next();
    } catch {
        res.clearCookie('auth');

        res.redirect('/auth/login');
    }
}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }

    next();
}
