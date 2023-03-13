const DEV_DATABASE_URL = ''
const TEST_DATABASE_URL = ''
const DATABASE_URL = ''

module.exports = {
  development: {
    url: DEV_DATABASE_URL,
    dialect: 'postgres'
  },
  test: {
    url: TEST_DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    url: DATABASE_URL,
    dialect: 'postgres'
  }
}
