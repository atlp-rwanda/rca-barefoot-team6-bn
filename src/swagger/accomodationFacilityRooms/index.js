import responses from '../responses'

const accomodationFacilityRoom = {
  '/accomodation-facility-rooms/{accomodationFacility_id}': {
    post: {
      tags: ['AccommodationFacilityRoom'],
      summary: '',
      description: 'creat a room in an accomodation facility',
      parameters: [
        {
          in: 'path',
          name: 'accomodationFacility_id',
          required: true,
          type: 'integer'
        }, {
          in: 'body',
          name: 'body',
          schema: {
            properties: {
              name: {
                type: 'string',
                example: 'Room 1',
                required: true
              },
              accomodationFacilityRoomType: {
                type: 'string',
                example: 'SINGLE'
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
    }
  }
}

export default accomodationFacilityRoom;
