describe('Pet Store', () => {
    it('GET: Find pet by ID:', () => {
    
        const status = 'available';
        //const status = 'sold';
        //const status = 'pending';

        cy.request({
          method: 'GET',
          url: `pet/findByStatus?status=${status}`, // Use the correct endpoint with the actual pet ID
          body: {


          },
        }).then((response) => {
          // Asserting the status code
          expect(response.status).to.eq(200);

          //To Check response body isn't empty
          const pets = response.body;
          expect(pets).to.be.an('array').and.not.to.be.empty;
        })
      })
    })