import { BACKEND } from "@/gql-lib/config";
import axios from "axios";


/**
 * Takes a GQL Query as a param, hits a backend.
 * @param query 
 * @returns Response | Error
 */
async function gqlFetch(query: string){
  return (
    await axios.post(
      BACKEND,
      { query: query},
      { headers: {'Content-Type': 'application/json'}}
    )
    .then(response => {
      return response;
    })
    .catch(error => {
      return error; 
    })
  )
}

export { gqlFetch };