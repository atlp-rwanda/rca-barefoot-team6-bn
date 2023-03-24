'use strict'

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
import { readdirSync } from 'fs'
import { basename as _basename, join } from 'path'
import { Sequelize, DataTypes } from 'sequelize';

import { env as _env } from 'process'
const basename = _basename(__filename)
const env = _env.NODE_ENV || 'development'
const config = require(join(__dirname, '/../config/config.js'))[env]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const process = require('process')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '/../config/config.js'))[env]
>>>>>>> 32936ce (chore: postgres and sequelize orm setup)
=======
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
const db = {}

let sequelize
if (config.use_env_variable) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
  sequelize = new Sequelize(_env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.url, config)
}

readdirSync(__dirname)
<<<<<<< HEAD
<<<<<<< HEAD
=======
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
=======
  sequelize = new Sequelize(_env[config.use_env_variable], config)
>>>>>>> 6599e8e (User Registration and Email Verification)
} else {
  sequelize = new Sequelize(config.url, config)
}

<<<<<<< HEAD
fs
  .readdirSync(__dirname)
>>>>>>> 32936ce (chore: postgres and sequelize orm setup)
=======
readdirSync(__dirname)
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    )
  })
  .forEach(file => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
    const model = require(join(__dirname, file))
    if (typeof model === 'function') {
      db[model.name] = model(sequelize, DataTypes)
    } else {
      db[model.name] = model
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
>>>>>>> 32936ce (chore: postgres and sequelize orm setup)
=======
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default { db, sequelize }
=======
module.exports = db
>>>>>>> 32936ce (chore: postgres and sequelize orm setup)
=======
export default { db, sequelize }
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
module.exports = db
>>>>>>> 72acd8f (Refactoring)
=======
export default { db, sequelize }
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
export default { db, sequelize }
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
export default { db, sequelize }
>>>>>>> 8d74a26 (feat: project structure initialization)
