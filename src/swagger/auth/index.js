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
  '/login': {
    post: {
      tags: ['Auth'],
      summary: 'Login',
      consumes: ['application/json'],
      produces: ['application/json'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string'
                },
                password: {
                  type: 'string'
                }
              },
              required: ['email', 'password']
            }
          }
        }
      },
      responses
    }
  }
};

export default authRoutes;
