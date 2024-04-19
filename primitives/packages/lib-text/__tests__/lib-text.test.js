'use strict';

const libText = require('..');
const assert = require('assert').strict;

assert.strictEqual(libText(), 'Hello from libText');
console.info('libText tests passed');
