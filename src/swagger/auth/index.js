import responses from '../responses';

const authRoutes = {
  '/': {
    get: {
      tags: ['Hello'],
      summary: 'Hello World',
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