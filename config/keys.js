// keys.js - rigure out what set of credentialas to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set pf key
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!
  module.exports =  require('./dev');
}