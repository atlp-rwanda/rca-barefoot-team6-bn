import responses from '../responses'

const hello = {
  '/': {
    get: {
      tags: ['Hello'],
      summary: 'Hello World',
      responses
    }
  }
}

export default hello;