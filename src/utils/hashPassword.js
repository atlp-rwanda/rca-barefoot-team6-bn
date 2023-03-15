'use strict'
const bcrypt = require('bcryptjs');
async function checkPassword(password) {
    return await bcrypt.compare(password, this.password);
}
async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

module.exports = { checkPassword, hashPassword };