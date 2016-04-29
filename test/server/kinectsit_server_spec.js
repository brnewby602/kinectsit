const frisby = require('frisby');

frisby.create('Ensure the root path returns 200')
  .get('http://localhost:3000')
  .expectStatus(200)
  .toss();
