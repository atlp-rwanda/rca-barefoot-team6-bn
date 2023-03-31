import responses from '../responses';

const request = {
  '/requests': {
    get: {
      tags: ['Request'],
      summary: 'Get all requests',
      description: 'Get all requests',
      operationId: 'getRequests',
      produces: ['application/json'],
      parameters: [],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    },
    post: {
      tags: ['Request'],
      summary: 'Create a request',
      description: 'Create a request',
      operationId: 'createRequest',
      consumes: ['application/json'],
      produces: ['application/json'],
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Request object',
          required: true,
          schema: {
            $ref: '#/definitions/Request'
          }
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  },
  '/requests/{id}': {
    get: {
      tags: ['Request'],
      summary: 'Get a request by id',
      description: 'Get a request by id',
      operationId: 'getRequestById',
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          type: 'string'
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    },
    patch: {
      tags: ['Request'],
      summary: 'Update a request by id',
      description: 'Update a request by id',
      operationId: 'updateRequestById',
      consumes: ['application/json'],
      produces: ['application/json'],
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
          description: 'Request object',
          required: true,
          schema: {
            $ref: '#/definitions/Request'
          }
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    },
    delete: {
      tags: ['Request'],
      summary: 'Delete a request by id',
      description: 'Delete a request by id',
      operationId: 'deleteRequestById',
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          type: 'string'
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  },
  '/requests/approve/{id}': {
    patch: {
      tags: ['Request'],
      summary: 'Approve a request by id',
      description: 'Approve a request by id',
      operationId: 'approveRequestById',
      consumes: ['application/json'],
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          type: 'string'
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  },
  '/requests/reject/{id}': {
    patch: {
      tags: ['Request'],
      summary: 'Reject a request by id',
      description: 'Reject a request by id',
      operationId: 'rejectRequestById',
      consumes: ['application/json'],
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          type: 'string'
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  },
  '/requests/cancel/{id}': {
    patch: {
      tags: ['Request'],
      summary: 'Cancel a request by id',
      description: 'Cancel a request by id',
      operationId: 'cancelRequestById',
      consumes: ['application/json'],
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          type: 'string'
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  },
  '/requests/user/{userId}': {
    get: {
      tags: ['Request'],
      summary: 'Get requests by user id',
      description: 'Get requests by user id',
      operationId: 'getRequestsByUserId',
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'userId',
          required: true,
          type: 'string'
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  },
  '/requests/room/{roomId}': {
    get: {
      tags: ['Request'],
      summary: 'Get requests by room id',
      description: 'Get requests by room id',
      operationId: 'getRequestsByRoomId',
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'roomId',
          required: true,
          type: 'string'
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  },
  '/requests/hotel/{hotelId}': {
    get: {
      tags: ['Request'],
      summary: 'Get requests by hotel id',
      description: 'Get requests by hotel id',
      operationId: 'getRequestsByHotelId',
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'hotelId',
          required: true,
          type: 'integer'
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  }

};

export default request;
