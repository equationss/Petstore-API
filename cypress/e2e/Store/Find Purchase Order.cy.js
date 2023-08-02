describe('Pet Store', () => {
    //This request add data which is mentioned in the body of the request
     it('Get: Find an Order:', () => {

     const orderId = '1';

     cy.request({
        method: 'GET', 
        url: `store/order/${orderId}`, 
        body: {

     }}).then((response) =>{
       
     //Asserting the status code
     expect(response.status).to.eq(200)
      })
     })
   })