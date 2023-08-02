    //Plugin for file upload: npm install --save-dev cypress-file-upload
    const fileToUpload = 'C:/Users/junai/Desktop/F.png'; // Actual path to your file

    describe('Pet Store', () => {
      it('POST: Upload Image', () => {
        cy.readFile(fileToUpload, 'base64').then((base64String) => {
          const formData = new FormData();
          formData.append('additionalMetadata', '0100');
          formData.append('file', base64String);
    
          const petId = '0'; // Replace '0' with the actual pet ID
    
          cy.request({
            method: 'POST',
            url: `pet/${petId}/uploadImage`, // Use the correct endpoint with the actual pet ID
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data',

//Headers section is used to set the Content-Type header to multipart/form-data, which is essential for successful file upload.
//The Content-Type header informs the server about the type of data being sent in the request body. 
//For file uploads, the Content-Type should be set to multipart/form-data.
            },
          }).then((response) => {
            // Asserting the status code
            expect(response.status).to.eq(200);
          })
        })
      })
    })
    