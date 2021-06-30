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

  it('null and null returns true', () => {
    // data to be tested
    let x = null
    let y = null
    // call the function with test data
    let result = strictEquals(x, y)

    // assert what should be true
    expect(result).to.equal(true)
  })

  it('null and "null" returns true', () => {
    // data to be tested
    let x = null
    let y = 'null'
    // call the function with test data
    let result = strictEquals(x, y)

    // assert what should be true
    expect(result).to.equal(false)
  })

  it('0 and false return false', () => {
    // data to be tested
    let x = 0
    let y = false
    // call the function with test data
    let result = strictEquals(x, y)

    // assert what should be true
    expect(result).to.equal(false)
  })

  it('ignores any 3rd value that is passed in', () => {
    // data to be tested
    let x = 5
    let y = '5'
    let z = 7
    // call the function with test data
    let result = strictEquals(x, y, z)

    // assert what should be true
    expect(result).to.equal(false)
  })
})