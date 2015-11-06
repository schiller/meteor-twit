'use strict';

Tinytest.add('Twit.is', function (test) {
  var T = new Twit({
    consumer_key: 'a',
    consumer_secret: 'b',
    access_token: 'c',
    access_token_secret: 'd'
  });
  test.instanceOf(T, Twit, 'Instantiation OK');
});