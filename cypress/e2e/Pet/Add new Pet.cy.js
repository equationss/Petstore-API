describe('Pet Store', () => {
 //This request add data which is mentioned in the body of the request
  it('POST: To add new PET', () => {
  
  cy.request({method: 'POST', url: 'pet', body: {
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
  }}).then((response) =>{
    
  //Asserting the status code to be 200 for successful creation
  expect(response.status).to.eq(200)
  })
  })
})