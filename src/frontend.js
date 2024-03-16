// Import Axios library
import axios from 'axios';

// Define function to make Axios request
const fetchDataFromBackend = async () => {
  try {
    const response = await axios.post('/api/router', { data: 'example data' });
    console.log(response.data);
    // Handle response data as needed
  } catch (error) {
    console.error('Error fetching data from backend:', error);
  }
};

// Call the function to fetch data from backend when needed
fetchDataFromBackend();
