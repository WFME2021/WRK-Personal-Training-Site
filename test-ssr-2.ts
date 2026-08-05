import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import React from 'react';
import App from './App.tsx';

const appHtml = renderToString(
  React.createElement(
    StaticRouter,
    { location: "/blog/is-it-worth-hiring-a-personal-trainer" },
    React.createElement(App)
  )
);
console.log("APP HTML length:", appHtml.length);
if (appHtml.includes('is-it-worth-hiring-a-personal-trainer')) {
  console.log("Found post slug in HTML.");
} else {
  console.log("Did not find post slug in HTML.");
}
