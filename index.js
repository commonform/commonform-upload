module.exports = upload

var https = require('https')

function upload(form, callback) {
  var request = {
    method: 'POST',
    host: 'api.commonform.org',
    path: '/forms' }
  https.request(request, function(response) {
    var status = response.statusCode
    if (status === 200 || status === 201) {
      callback(null, response.headers.location) }
    else {
      callback(
        'api.commonform.org responded ' +
        response.statusCode) } })
   .end(JSON.stringify(form)) }
