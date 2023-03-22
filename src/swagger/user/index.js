import responses from '../responses';

const user = {
  '/users': {
    post: {
      tags: ['User'],
      summary: '',
      parameters: [
        {
          in: 'body',
          name: 'body',
          schema: {
            $ref: '#/definitions/User'
          }
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          Bearer: ['global']
        }
      ]
    },
    get: {
      tags: ['User'],
      summary: '',
      description: '',
      parameters: [],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          Bearer: ['global']
        }
      ]
    }
  },
  '/users/verify-email/{token}': {
    get: {
      tags: ['User'],
      summary: '',
      description: '',
      parameters: [
        {
          in: 'path',
          name: 'token',
          required: true,
          type: 'string'
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          Bearer: ['global']
        }
      ]
    }
  },
  '/users/request-password-reset': {
    post: {
      tags: ['User'],
      summary: '',
      description: 'endpoint to request a password reset',
      parameters: [
        {
          in: 'body',
          name: 'body',
          required: true,
          type: 'email'
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          Bearer: ['global']
        }
      ]
    }
  },
  '/users/reset-password/{token}': {
    post: {
      tags: ['User'],
      summary: '',
      description: 'reset password endpoint',
      parameters: [
        {
          in: 'path',
          name: 'token',
          required: true,
          type: 'string'
        },
        {
          in: 'body',
          name: 'password',
          required: true,
          type: 'string'
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          Bearer: ['global']
        }
      ]
    }
  }
};

export default user;
