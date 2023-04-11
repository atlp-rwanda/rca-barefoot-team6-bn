import responses from '../responses';

const comment = {

  '/comments': {
    post: {
      tags: ['Comment'],
      summary: '',
      parameters: [
        {
          in: 'body',
          name: 'body',
          schema: {
            $ref: '#/definitions/Comment'
          }
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    },
    get: {
      tags: ['Comment'],
      summary: '',
      description: '',
      parameters: [],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  },
  '/comments/requests/{requestId}': {
    get: {
      tags: ['Comment'],
      summary: '',
      description: '',
      parameters: [
        {
          in: 'path',
          name: 'requestId',
          required: true,
          type: 'string'
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  },
  '/comments/{id}': {
    get: {
      tags: ['Comment'],
      summary: '',
      description: '',
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          type: 'string'
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    },
    put: {
      tags: ['Comment'],
      summary: '',
      description: '',
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          type: 'string'
        },
        {
          in: 'body',
          name: 'body',
          schema: {
            type: 'object',
            properties: {
              comment_text: {
                type: 'string',
                example: 'string'
              }
            }
          }
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    },
    delete: {
      tags: ['Comment'],
      summary: '',
      description: '',
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          type: 'string'
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  },
  '/comments/{id}/replies': {
    get: {
      tags: ['Comment'],
      summary: '',
      description: '',
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          type: 'string'
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  }
};

export default comment;
