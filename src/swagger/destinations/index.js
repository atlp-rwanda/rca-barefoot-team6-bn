import responses from '../responses';

const destinations = {
  '/destinations/most-travelled/{level}': {
    get: {
      tags: ['Destinations'],
      summary: 'Most travelled destinations',
      responses,
      produces: ['application/json'],
      parameters: [{
        name: 'level',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
          enum: ['Hotel', 'District']
        },
        description: 'The level to filter the destinations by. Must be one of: Hotel, District.',
        default: 'District'
      }]
    }
  }
};

export default destinations;
