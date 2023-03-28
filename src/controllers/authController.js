import jwt from 'jsonwebtoken';
import userService from '../services/userService';

const { JWT_SECRET, WEB_URL } = process.env;

/**
 * @class AuthController
 * @classdesc AuthController
 */
class AuthController {
  /**
     * Login Callback method.
     * @function loginCallback
     * @param {Object} req request Object.
     * @param {Object} res response Object.
     * @returns {Object} response Object.
     */
  static async loginCallback (req, res) {
    try {
      const user = await userService.findOrCreateUser(req.user);
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '24h' });

      const apiResponse = {
        status: 200,
        message: 'Successfully logged in',
        data: { token }
      };

      const responseBuffer = Buffer.from(JSON.stringify(apiResponse));

      return res.redirect(`${WEB_URL}?code=${responseBuffer.toString('base64')}&status=success`);
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        const apiResponse = {
          status: 422,
          message: error.errors[0].message,
          error: 'Validation Error'
        };
        const responseBuffer = Buffer.from(JSON.stringify(apiResponse));
        return res.redirect(`${WEB_URL}?code=${responseBuffer.toString('base64')}&status=error`);
      }
      // in case the email is not authorized
      if (error.name === 'Email not authorized') {
        const apiResponse = {
          status: 401,
          message: error.message,
          error: 'Email not authorized'
        };
        const responseBuffer = Buffer.from(JSON.stringify(apiResponse));
        return res.redirect(`${WEB_URL}?code=${responseBuffer.toString('base64')}&status=error`);
      }
      // return Response.serverError(res, error);
      const apiResponse = {
        status: 500,
        message: error,
        error: 'Server Error'
      };
      const responseBuffer = Buffer.from(JSON.stringify(apiResponse));
      return res.redirect(`${WEB_URL}?code=${responseBuffer.toString('base64')}&status=error`);
    }
  }
}

export default AuthController;
