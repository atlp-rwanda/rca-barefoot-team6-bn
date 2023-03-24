/* eslint-disable no-console */
/* eslint-disable no-useless-catch */
import User from '../database/models/user';

/** Class representing user services. */

class UserService {
  /**
   * Creates a new user.
   * @param {object} param details of a user.
   * @returns {object} users new user.
   */
  static async findOrCreateUser (_user) {
    try {
      const users = await User.findOrCreate({
        where: { email: _user.email },
        defaults: _user
      });

      const user = users[0].dataValues;

      if (!user.googleId) {
        await User.update({ googleId: _user.googleId, isLoggedIn: true }, { where: { email: _user.email } });
      }

      if (!user.facebookId) {
        await User.update({ facebookId: _user.facebookId, isLoggedIn: true }, { where: { email: _user.email } });
      }

      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
