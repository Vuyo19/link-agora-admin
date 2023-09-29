async function filterManageResponse(value) {

    const url = 'http://127.0.0.1:8000/requests/api/event-request-filter/'; // Url to request the event requests. 
    const requestData = {
      // Your data to be sent in the request body
      // Sending the specific event id to the server to get the specific event.  
      // Sending the value of the filter request.
      event_response_filter: value
    };

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
            return responseData.events; // Update events_table state 
  
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



export default filterManageResponse;
