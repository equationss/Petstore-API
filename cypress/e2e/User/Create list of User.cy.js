describe('Pet Store', () => {
    //This request add data which is mentioned in the body of the request
     it('POST: Create List of User', () => { 
     cy.request({
        method: 'POST', 
        url: 'user/createWithList', 
        body: {

    "id": 2,
    "username": "sgsfgf",
    "firstName": "dgfrkgnr",
    "lastName": "sdgsfgf",
    "email": "strifbdgbng",
    "password": "6515163",
    "phone": "strddvd5848ing",
    "userStatus": 0


 }}).then((response) =>{
       
     //Asserting the status code to be 200 for successful creation
     expect(response.status).to.eq(200)
     expect(response.body).to.have.property('message','ok')

      })
     })
   })