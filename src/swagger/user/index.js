<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import responses from '../responses';
=======
import responses from '../responses'
>>>>>>> 5aef2c6 (swagger)
=======
import responses from '../responses';
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
import responses from '../responses';
>>>>>>> 8d74a26 (feat: project structure initialization)

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          Bearer: ['global']
<<<<<<< HEAD
<<<<<<< HEAD
=======
      consumes: [
        'application/json'
      ],
      produces: [
        'application/json'
      ],
      responses,
      security: [
        {
          Bearer: [
            'global'
          ]
>>>>>>> 5aef2c6 (swagger)
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
        }
      ]
    },
    get: {
      tags: ['User'],
      summary: '',
      description: '',
      parameters: [],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          Bearer: ['global']
<<<<<<< HEAD
<<<<<<< HEAD
=======
      consumes: [
        'application/json'
      ],
      produces: [
        'application/json'
      ],
      responses,
      security: [
        {
          Bearer: [
            'global'
          ]
>>>>>>> 5aef2c6 (swagger)
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          schema: {
            properties: {
              email: {
                type: 'email',
                example: '',
=======
          schema: {
            properties: {
              email: {
                type: 'email',
<<<<<<< HEAD
                example: 'email@gmail.com',
>>>>>>> e17b8df (ft(resetPassword):task concluded[# 184638375])
=======
                example: '',
>>>>>>> abcac00 (ft(resetPassword):task concluded[# 184638375])
                required: true
              }
            }
          }

<<<<<<< HEAD
=======
          required: true,
          type: 'email'
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> e17b8df (ft(resetPassword):task concluded[# 184638375])
=======
          required: true,
          type: 'email'
>>>>>>> 8d74a26 (feat: project structure initialization)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e17b8df (ft(resetPassword):task concluded[# 184638375])
          schema: {
            type: 'object',
            properties: {
              password: {
                type: 'string',
                example: 'NewPassword',
                required: true
              }
            }
          }
<<<<<<< HEAD
=======
          required: true,
          type: 'string'
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> e17b8df (ft(resetPassword):task concluded[# 184638375])
=======
          required: true,
          type: 'string'
>>>>>>> 8d74a26 (feat: project structure initialization)
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          Bearer: ['global']
<<<<<<< HEAD
<<<<<<< HEAD
=======
      consumes: [
        'application/json'
      ],
      produces: [
        'application/json'
      ],
      responses,
      security: [
        {
          Bearer: [
            'global'
          ]
>>>>>>> 5aef2c6 (swagger)
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
        }
      ]
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
}
>>>>>>> 5aef2c6 (swagger)
=======
};
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
};
>>>>>>> 8d74a26 (feat: project structure initialization)

export default user;
