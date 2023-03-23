import responses from '../responses'

const user = {
    '/users/login': {
        post: {
          tags: ['User'],
          summary: '',
          description: '',
          parameters: [
            {
              in: 'body',
              name: 'body',
              schema: {
                $ref: '#/definitions/LoginInfo'
              },
              required: true
            }
          ],
          consumes: [
            'application/json'
          ],
          produces: [
            'application/json'
          ],
          responses,
          security: [
            {
              Bearer: [
                'global'
              ]
            }
          ]
        }
      },
      '/users/self': {
        get: {
            tags: ['User'],
            summary: 'Get my profile',
            parameters: [],
            consumes: [
                'application/json'
            ],
            produces: [
                'application/json'
            ],
            responses,
            security: [{
               JWT:[],
            }]
        }
    },
}


export default user;
