import axios from 'axios';

const graphqlEndpoint = 'http://localhost:8000/api/graphql/';

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