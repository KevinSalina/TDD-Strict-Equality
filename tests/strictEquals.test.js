const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../strictEquals.js')

describe('StrictEquality', () => {
  it('returns true if values provided are strictly equal', () => {
    // data to be tested
    let x = 5
    let y = 5
    // call the function with test data
    let result = strictEquals(x, y)

    // assert what should be true
    expect(result).to.equal(true)
  })

  it('returns false if values provided are not strict equal', () => {
    // data to be tested
    let x = 5
    let y = '5'
    // call the function with test data
    let result = strictEquals(x, y)

    // assert what should be true
    expect(result).to.equal(false)
  })
})