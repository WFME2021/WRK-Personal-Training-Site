import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';

console.log(renderToString(
  <StaticRouter location="/">
    <App />
  </StaticRouter>
));
