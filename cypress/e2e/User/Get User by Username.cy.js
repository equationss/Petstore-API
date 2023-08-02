describe('Pet Store', () => {
    //This request add data which is mentioned in the body of the request
     it('GET: User by Username', () => { 

        const username = "eq";
     cy.request({
        method: 'GET', 
        url: `user/${username}`, 
        body: {



 }}).then((response) =>{
       
     //Asserting the status code to be 200 for successful creation
     expect(response.status).to.eq(200)
     expect(response.body).to.have.property('firstName', 'Junaid');

      })
     })
   })