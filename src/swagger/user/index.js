import responses from '../responses'

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
        }
      ]
    },
    get: {
      tags: ['User'],
      summary: '',
      description: '',
      parameters: [],
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
        }
      ]
    }
  },
  '/users/login': {
    post: {
      tags: ['User'],
      summary: '',
      description: '',
      parameters: [
        {
          in: 'body',
          name: 'body',
          schema: {
            $ref: '#/definitions/LoginInfo'
          },
          required: true
        }
      ],
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
        }
      ]
    }
  },
  '/users/self': {
    get: {
      tags: ['User'],
      summary: 'Get my profile',
      parameters: [],
      consumes: [
        'application/json'
      ],
      produces: [
        'application/json'
      ],
      responses,
      security: [{
        JWT: []
      }]
    }
  }
}

export default user;
