const members = require('../Members');

const logger = (req, res, next) => {
    console.log(members);
    next();
}

module.exports = logger;