// ? write a node module to encrypt thee password (bcryptjs)
const bcryptjs = require("bcryptjs");

const hashPw = (password) => {
  return bcryptjs.hashSync(password, 10);
};

const checkPw = (password, hashPassword) => {
  return bcryptjs.compareSync(password, hashPassword);
};

module.exports = { hashPw, checkPw };
