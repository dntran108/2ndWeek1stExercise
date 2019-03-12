var https = require('https');

function getHTML (options, callback) {
  var result = '';
  https.get(options, function (response) {
  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length);
    result += data.toString() + "\n";
  });

  response.on('end', function() {
    console.log('Response stream complete.');
    callback(result);
  });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
