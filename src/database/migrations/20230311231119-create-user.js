'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  async up (queryInterface, Sequelize) {
=======
  async up(queryInterface, Sequelize) {
>>>>>>> 32936ce (chore: postgres and sequelize orm setup)
=======
  async up (queryInterface, Sequelize) {
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
  async up (queryInterface, Sequelize) {
>>>>>>> 262bffb (chore: env file setup and database variables)
=======
  async up (queryInterface, Sequelize) {
>>>>>>> 8d74a26 (feat: project structure initialization)
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
      password: {
        type: Sequelize.STRING
      },
      resetPasswordToken: {
        type: Sequelize.STRING,
        allowNull: true
      },
      resetPasswordExpires: {
        type: Sequelize.DATE,
        allowNull: true
      },
      emailVerificationToken: {
        type: Sequelize.STRING,
        allowNull: true
      },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 32936ce (chore: postgres and sequelize orm setup)
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
<<<<<<< HEAD
=======
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
>>>>>>> 32936ce (chore: postgres and sequelize orm setup)
=======
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
>>>>>>> 262bffb (chore: env file setup and database variables)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
