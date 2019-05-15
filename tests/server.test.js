var test = require('tape');
var request = require('superagent');

var baseUrl = 'http://localhost:3000/api/';

var dummyPost = {
    title: 'this is a test',
    body: 'lorem ipsum'
}

test('Create Post', function (t) {
    request
    .post(baseUrl + 'post')
    .send(dummyPost)
    .end(function (err, res) {
        t.equal(res.status, 201, 'response status shoud be 200');
    });
    t.end();
});