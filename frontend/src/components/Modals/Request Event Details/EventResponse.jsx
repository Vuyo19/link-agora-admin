
// Function to determine if the admin approved the event, declined the event or placed the event Under Review.
async function responseData(response, id) {  

    const url = 'http://127.0.0.1:8000/requests/api/event-request-response/'; // Url to request the event requests. 
    const requestData = {
      // Your data to be sent in the request body
      // Sending the specific event id to the server to get the specific event. 
      event_id: id, // Passing the id of the event detail
      event_response: response
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
            alert(responseData.message); // Update events_table state 
  
          } else {
            alert('Request failed')
            // console.error('Request failed:', response.status, response.statusText);
          }
        
      } catch(error) {
        console.error('Request error:', error);
      }
}

export default responseData; 