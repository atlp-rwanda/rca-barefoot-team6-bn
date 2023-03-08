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
  }
}

export default user;
