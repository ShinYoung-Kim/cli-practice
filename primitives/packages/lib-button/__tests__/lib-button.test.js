'use strict';

const libButton = require('..');
const assert = require('assert').strict;

assert.strictEqual(libButton(), 'Hello from libButton');
console.info('libButton tests passed');
