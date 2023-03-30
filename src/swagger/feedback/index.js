import responses from '../responses';

const feedback = {
  '/': {
    post: {
      tags: ['Feedback'],
      summary: '',
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
          Bearer: ['global']
        }
      ]
    },
    get: {
      tags: ['Feedback'],
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
  }
};

export default feedback;
