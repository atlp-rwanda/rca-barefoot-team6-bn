import responses from '../responses'

const room = {
  '/rooms/{hotelId}': {
    post: {
      tags: [
        'Room'
      ],
      summary: 'Create a room',
      description: '',
      parameters: [
        {
          in: 'path',
          name: 'hotelId',
          required: true,
          type: 'integer'
        },
        {
          in: 'body',
          name: 'body',
          schema: {
            $ref: '#/definitions/Room'
          }
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [{
        JWT: []
      }]
    },
    get: {
      tags: [
        'Room'
      ],
      summary: 'Get all rooms in hotel',
      description: '',
      parameters: [
        {
          in: 'path',
          name: 'hotelId',
          required: true,
          type: 'integer'
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [{
        JWT: []
      }]
    }
  },

  '/rooms': {
    get: {
      tags: [
        'Room'
      ],
      summary: 'Get all rooms',
      description: '',
      parameters: [],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [{
        JWT: []
      }]
    }
  }
}

export default room;
