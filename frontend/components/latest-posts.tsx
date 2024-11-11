import axios from "axios";
import PostItem from "./post-item";

const endpoint = 'http://localhost:8000/api/graphql/';

const graphqlQuery = {
  query: `
  query Pages {
  pages {
      ... on BlogPage {
          id
          title
          slug
      }
  }
}
  `
}

type Post = {
    id: number;
    slug: string;
    title: string;
    readTime: string;
}

async function LatestPosts() {

    let data = await axios.post(
        endpoint,
        graphqlQuery, 
        {
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
      
    let postItems = data;
    return ( 
        <>
            {postItems.map((post: Post) => (
                <PostItem
                key={post.id}
                readTime={post.readTime}
                title={post.title}
                slug={post.slug}
                />))
            }
        </>
     );
}

export default LatestPosts;