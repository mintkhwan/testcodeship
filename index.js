/* global describe,it */
var num1 = 1
var num2 = 2
function plus (num1, num2) {
  return num1 + num2
}
console.log(plus(num1, num2))

var assert = require('assert')
describe('check sum function', function () {
  describe('plus()', function () {
    it('should return 3', function () {
      assert.equal(plus(num1, num2), 3)
    })
  })
})
