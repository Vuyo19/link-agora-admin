async function manageStatResponse() { 

    const url = 'http://127.0.0.1:8000/manage/api/managed-events-stat/'; // Url to request the event requests.    


    const requestData = {
        key1: "manageStat"
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

export default manageStatResponse;