// API For logging the user in. 

async function loginRequestResponse(email, password) { 

    const url = 'http://127.0.0.1:8000/users/api/login/'; // Url to request the event requests.  
    
    const requestData = {
      // Your data to be sent in the request body
      // Sending the specific event id to the server to get the specific event.  
      // Sending the value of the filter request.
      admin_response_email: email, 
      admin_response_password: password 
      
    };   

    // Making the request to log the user in and return the token to allow the user to log in. 
    try { 

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        }); 

        if (response.ok) { 

            const responseData = await response.json();  

            // The user can now log in. 
            responseData.authenticated = true; 

            return responseData; // Update events_table state 
  
          } else {
            alert('Request failed');
            // console.error('Request failed:', response.status, response.statusText); 
            return null; // Return null or an appropriate value in case of an error

          }

    } catch(error) {
        console.error('Request error:', error); 
        return null; // Return null or an appropriate value in case of an error
    }

} 

export default loginRequestResponse;