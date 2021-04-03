module.exports = function validateEmail (email) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
