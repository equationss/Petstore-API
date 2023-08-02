describe('Pet Store', () => {
    //This request add data which is mentioned in the body of the request
     it('POST: New User', () => { 
     cy.request({
        method: 'POST', 
        url: 'user', 
        body: {

            "id": 5,
            "username": "eq",
            "firstName": "Junaid",
            "lastName": "Junaid",
            "email": "jaudfef@fdgr.egfr",
            "password": "Junaid",
            "phone": "+8486454",
            "userStatus": 5


 }}).then((response) =>{
       
     //Asserting the status code to be 200 for successful creation
     expect(response.status).to.eq(200)
     expect(response.body).to.have.property('message');

      })
     })
   })