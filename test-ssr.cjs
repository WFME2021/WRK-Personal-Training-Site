const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router');
const App = require('./dist/server.cjs'); // wait, do we have dist/server.cjs? 
