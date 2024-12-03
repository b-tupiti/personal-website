import axios from 'axios';

// graphql endpoint
const graphqlEndpoint = 'http://localhost:8000/api/graphql/';

/**
 * Takes in a graphQL query
 * @param query 
 */
function query(query: any){
  axios.post(graphqlEndpoint, query, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    return response.data.data.pages;
  })
  .catch(error => {
    return error;
  });
}

export {query};