'use strict';

const libBuilder = require('..');
const assert = require('assert').strict;

assert.strictEqual(libBuilder(), 'Hello from libBuilder');
console.info('libBuilder tests passed');
