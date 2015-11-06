'use strict';

var packageName = 'schiller:twit';  // https://atmospherejs.com/schiller/twit
var where = 'server';  // where to install: 'client' or 'server'. For both, pass nothing.

Package.describe({
  name: packageName,
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Twitter API Client (REST & Streaming)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/schiller/twit.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({twit: '2.1.1'});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('twit.js', where);
  api.export('Twit', where);
});

Package.onTest(function(api) {
  api.use('tinytest', where);
  api.use(packageName, where);
  api.addFiles('twit-tests.js', where);
});
