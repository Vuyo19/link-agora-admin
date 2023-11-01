// Returning the activity log based on the current month.  

async function activitylogRequestResponse() {

    // 
    const url = 'http://127.0.0.1:8000/activity/api/log/'; // Url to request the event requests.   

    const requestData = {
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
            
            // Returning the activity log. 
            return responseData.activity_log; // Update events_table state 
  
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

export default activitylogRequestResponse; 