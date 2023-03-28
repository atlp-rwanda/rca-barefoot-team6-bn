import responses from '../responses'

const request = {
  '/requests/{room_id}': {
    post: {
      tags: [
        'Request'
      ],
      summary: 'Create a request',
      description: '',
      parameters: [
        {
          in: 'path',
          name: 'room_id',
          required: true,
          type: 'integer'
        }
      ],
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
  },
  '/requests/{id}': {
    put: {
      tags: [
        'Request'
      ],
      summary: 'Update a request',
      description: '',
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          type: 'integer'
        },
        {
          in: 'body',
          name: 'body',
          required: false,
          schema: {
            $ref: '#/definitions/Request'
          }
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      responses,
      security: [{
        JWT: []
      }]
    }
  }
}

export default request;
