describe('Pet Store', () => {
    //This request add data which is mentioned in the body of the request
     it('PUT: Update existing pet', () => {
     
     cy.request({method: 'PUT', url: 'pet', body: {
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
       
     //Asserting the status code
     expect(response.status).to.eq(200)
     })
     })
   })