import * as $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import Post from '@models/Post';
import './babel';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
// import json from './assets/json';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
import WebpackLogo from './assets/webpack-logo';

const post = new Post('Webpack post title', WebpackLogo);

// $('pre').addClass('code').html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack sandbox</h1>
    <hr/>
    <div className="logo" />
    <hr/>
    <pre />
    <hr/>
    <div className="box">
      <h2>Less</h2>
    </div>
    <div className="card">
      <h2>Scss</h2>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));

// console.log('Post to string: ', post.toString());
// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);
