import responses from '../responses';

const authRoutes = {
  '/users/auth/facebook': {
    get: {
      tags: ['Auth'],
      summary: 'Login with Facebook',
      responses
    }
  },
  '/users/auth/google': {
    get: {
      tags: ['Auth'],
      summary: 'Login with Google',
      responses
    }
  },
};

export default authRoutes;
