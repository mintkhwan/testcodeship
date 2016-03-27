/* global describe,it */
var num1 = 5
var num2 = 5
function sum (num1, num2) {
  return num1 + num2
}
console.log(sum(num1, num2))

var assert = require('assert')
describe('check sum function', function () {
  describe('sum()', function () {
    it('should return 3', function () {
      assert.equal(sum(num1, num2), 10)
    })
  })
})
