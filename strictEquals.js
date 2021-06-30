const strictEquals = (x, y) => {
  if (Object.is(x, y)) return true

  // Another way of solving the problem
  // if (typeof (x) == typeof (y) && x == y) return true

  return false
}

module.exports = strictEquals