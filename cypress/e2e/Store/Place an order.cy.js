describe('Pet Store', () => {
    //This request add data which is mentioned in the body of the request
     it('POST: Place an Order:', () => {
     
     cy.request({method: 'POST', url: 'store/order', body: {
        "id": 0,
        "petId": 0,
        "quantity": 0,
        "shipDate": "2023-08-02T10:12:26.082Z",
        "status": "placed",
        "complete": true
     }}).then((response) =>{
       
     //Asserting the status code to be 200 for successful creation
     expect(response.status).to.eq(200)
     expect(response.body.status).to.eq("placed");
      })
     })
   })