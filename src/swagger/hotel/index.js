import responses from '../responses';

const hotel = {
  '/hotels': {
    post: {
      tags: ['Hotel'],
      summary: '',
      parameters: [
        {
          in: 'body',
          name: 'body',
          schema: {
            $ref: '#/definitions/Hotel'
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
      tags: ['Hotel'],
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
  '/hotels/{id}': {
    get: {
      tags: ['Hotel'],
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
          Bearer: ['global']
        }
      ]
    },
    put: {
      tags: ['Hotel'],
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
            $ref: '#/definitions/Hotel'
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
    delete: {
      tags: ['Hotel'],
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
          Bearer: ['global']
        }
      ]
    }
  },
  '/search': {
    post: {
      tags: ['Hotel'],
      summary: 'Search for records across all tables',
      parameters: [
        {
          in: 'body',
          name: 'body',
          schema: {
            type: 'object',
            properties: {
              searchText: {
                type: 'string',
                example: 'grandhotel',
                required: true
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
          Bearer: ['global']
        }
      ]
    }
  }
};

export default hotel;
