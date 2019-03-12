var { getHTML, printHTML } = require('./http=functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);
