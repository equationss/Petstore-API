describe('Pet Store', () => {
    //This request add data which is mentioned in the body of the request
     it('GET: User Login', () => {
        const username = "Junaid";
        const password = "1122"; 
     cy.request({
        method: 'GET', 
        url: 'user/login', 
        auth: {
                username: username,
                password: password,
     }}).then((response) =>{
       
     //Asserting the status code to be 200 for successful creation
     expect(response.status).to.eq(200)
      })
     })
   })