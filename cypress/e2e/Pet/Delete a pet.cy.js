describe('Pet Store', () => {
    it('Delete: Del a pet by ID:', () => {
  
        const petId = '1'; // Replace '0' with the actual pet ID
  
        cy.request({
          method: 'Delete',
          url: `pet/${petId}`, // Use the correct endpoint with the actual pet ID
          body: {

          },
        }).then((response) => {
          // Asserting the status code
          expect(response.status).to.eq(200);
        })
      })
    })