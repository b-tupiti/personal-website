import { BACKEND } from "@/gql-lib/config";
import axios from "axios";


// /**
//  * Takes a GQL Query as a param, hits a backend.
//  * @param query 
//  * @returns Response | Error
//  */
// async function gqlFetch(query: string, backend: string = BACKEND){
//   return (
//     await axios.post(
//       backend,
//       { query: query},
//       { headers: {'Content-Type': 'application/json'}}
//     )
//     .then(response => {
//       return response;
//     })
//     .catch(error => {
//       return error; 
//     })
//   )
// }

async function gqlFetch(query: string, backend: string = BACKEND) {
  try {
    const response = await fetch(backend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query }),
      

    });

    if (!response.ok) {
      // Handle non-successful responses (e.g., 4xx or 5xx status codes)
      const errorData = await response.json();
      return { ...response, error: errorData }; // Return the response and error data
      
    }
    const data = await response.json();
    // console.log(data.data.pages);
    return { data: data }; // Return the response and the parsed JSON data

  } catch (error: any) {
    // Handle network errors or other exceptions during the fetch
    return { error: error };
  }
}


export { gqlFetch };