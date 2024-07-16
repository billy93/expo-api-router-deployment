const { createRequestHandler } = require('@expo/server/adapter/vercel');

type Test = {
  id: number
}

module.exports = createRequestHandler({
  build: require('path').join(__dirname, '../dist/server'),
  mode: process.env.NODE_ENV,
});
