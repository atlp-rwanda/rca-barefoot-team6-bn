/* eslint-disable no-console */
/* eslint-disable no-useless-catch */
import database from '../database/models';

const {
  user
} = database;

/** Class representing user services. */

class UserService {
  /**
   * Creates a new user.
   * @param {object} param details of a user.
   * @returns {object} users new user.
   */
  static async findOrCreateUser (_user) {
    try {
      const users = await user.findOrCreate({
        where: { providerId: _user.providerId, provider: _user.provider },
        defaults: _user
      });

      return users;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
}

export default UserService;
