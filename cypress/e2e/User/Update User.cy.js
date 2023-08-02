describe('Pet Store', () => {
    //This request add data which is mentioned in the body of the request
     it('PUT: Update User', () => { 

        const username = "eq";

        cy.request({
        method: 'PUT', 
        url: `user/${username}`, 
        body: {
            
            "id": 5,
            "username": "eq",
            "firstName": "Junaid",
            "lastName": "Raja",
            "email": "jaudfef@fdgr.egfr",
            "password": "Junaid",
            "phone": "+8486454",
            "userStatus": 5



 }}).then((response) =>{
       
     //Asserting the status code to be 200 for successful creation
     expect(response.status).to.eq(200)
     expect(response.body).to.have.property('message', '5');

      })
     })
   })