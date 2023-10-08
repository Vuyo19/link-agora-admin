// Requesting the Detail of the requested event. 
async function requestEventDetailResponse(id) { 

    const url = 'http://127.0.0.1:8000/requests/api/event-request-detail/'; // Url to request the event requests.  

    const requestData =  {
        event_id: id
    }; 

    // Getting the Detail of the Requested Event Selected for Viewing.
    try {
        // Fetching the information. 
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });  

        // If request code is 200 
        if(response.ok) {
            const responseData = await response.json();   

            return responseData; // Returning the response for the event Detail. 
            

        } else {
            alert('Request failed');
            // console.error('Request failed:', response.status, response.statusText); 
            return null; // Return null or an appropriate value in case of an error
        }


    } catch(error) {
        console.error('Request error:', error); 
        return null; // Return null or an appropriate value in case of an error
  
    }




};  

export default requestEventDetailResponse; 
