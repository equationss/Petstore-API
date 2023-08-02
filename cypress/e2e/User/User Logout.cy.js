describe('Pet Store', () => {
    //This request add data which is mentioned in the body of the request
     it('GET: User Logout', () => {

        cy.request({
        method: 'GET', 
        url: 'user/logout', 
        
    }).then((response) =>{
       
     //Asserting the status code to be 200
     expect(response.status).to.eq(200)
     expect(response.body).to.have.property('message', 'ok');

      })
     })
   })