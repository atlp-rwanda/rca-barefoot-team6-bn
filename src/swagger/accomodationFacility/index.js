import responses from '../responses';

const accommodationFacility = {

  '/accomodation-facilities': {
    post: {
      tags: ['AccommodationFacility'],
      summary: '',
      description: 'post accommodation facility',
      parameters: [
        {
          in: 'body',
          name: 'body',
          schema: {
            properties: {
              name: {
                type: 'string',
                example: 'Villa',
                required: true
              },
              address: {
                type: 'string',
                example: 'Kigali',
                required: true
              },
              image: {
                type: 'string',
                example: 'image',
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
          JWT: []
        }
      ]
    },
    get: {
      tags: ['AccommodationFacility'],
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
  '/accomodation-facilities/{id}': {
    get: {
      tags: ['AccommodationFacility'],
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
      tags: ['AccommodationFacility'],
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
            $ref: '#/definitions/AccommodationFacility'
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
      tags: ['AccommodationFacility'],
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

export default accommodationFacility;
