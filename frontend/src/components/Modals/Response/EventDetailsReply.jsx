// Replying to the Event Detail. Place under Review, Decline or Accept. 

async function requestEventDetailResponseReply(id, value) { 

    // Url for passing the data.
    const url = 'http://127.0.0.1:8000/requests/api/event-request-reply/'; // Url to request the event requests.  

    // Passing the data to the backend
    const requestData =  {
        event_id: id, 
        event_reply: value 
    };    
    
    // Trying to make the request to the backend 
    try {   

        // Sending the information. 
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });   

        // Returning response. 
        if(response.ok) {

            const responseData = await response.json();  
            alert(responseData.message);   

        } else {
            alert("Request failed"); 
            return null; // Return null or an appropriate value in case of an error

        }

    } catch(error) {
        console.error('Request error:', error); 
        return null; // Return null or an appropriate value in case of an error
    }

}; 

export default requestEventDetailResponseReply; 