import responses from '../responses'

const room = {
  '/rooms/{hotel_id}': {
    post: {
      tags: [
        'Room'
      ],
      summary: 'Create a room',
      description: '',
      parameters: [
        {
          in: 'path',
          name: 'hotel_id',
          required: true,
          type: 'integer'
        },
        {
          in: "body",
          name: "body",
          schema: {
            $ref: "#/definitions/Room",
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

export default room;
