import responses from '../responses';

const feedback = {
  '/feedback': {
    post: {
      tags: ['Feedback'],
      summary: 'Give feedback',
      parameters: [
        {
          in: 'body',
          name: 'body',
          schema: {
            $ref: '#/definitions/Feedback'
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
      tags: ['Feedback'],
      summary: 'Get all feedbacks',
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
  },
  '/feedback/{id}': {
    put: {
      tags: ['Feedback'],
      summary: 'edit feedback by id',
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
            $ref: '#/definitions/Feedback'
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
      tags: ['Feedback'],
      summary: 'delete feedback by id',
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

export default feedback;
