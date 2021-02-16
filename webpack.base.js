const path = require('path');

module.exports = {
  output: {
    filename: 'index.bundle.js',
    path: path.join(__dirname, 'public'),
  },
};
