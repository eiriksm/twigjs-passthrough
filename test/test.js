'use strict';
/* global describe, it */
require('should');

describe('Module functionality', function() {
  it('Should export a function', function() {
    require('..').should.be.instanceOf(Function);
  });
  it('Should return the same value when doing filtering', function() {
    var value = 'test123';
    require('..')({
      extendFilter: function(t, c) {
        c(value).should.equal(value);
      }
    });
  })
});
