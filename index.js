const bunyan = require('bunyan');
const blackhole = require('stream-blackhole');

module.exports = function createNoopLogger(_name) {
  const name = _name || '/dev/null';

  return bunyan.createLogger({
    name,
    stream: blackhole(),
  });
};
