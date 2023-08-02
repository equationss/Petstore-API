describe('Pet Store', () => {
    //This request add data which is mentioned in the body of the request
     it('GET: Return status of Inventory:', () => {


     cy.request({
        method: 'GET', 
        url: `store/inventory`, 
        body: {

     }}).then((response) =>{
       
     //Asserting the status code
     expect(response.status).to.eq(200)
     expect(response.body).to.have.property('available');
    })
     })
   })