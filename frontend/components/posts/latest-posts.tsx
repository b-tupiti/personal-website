import PostItem from "./post-item";
import { getLatestPostsGQL } from "@/gql-lib/queries";
import { gqlFetch } from "@/gql-lib/gql-fetch";
import Title from "@/ui/title";

type Post = {
    id: number;
    slug: string;
    title: string;
}

async function LatestPosts(){

  const query = getLatestPostsGQL();
  const obj = await gqlFetch(query);

  if(obj instanceof Error){
    return null;
  }
  
  let postItems = obj.data.data.pages;
    
  return ( 
      
      <div 
            className="flex flex-col items-center md:items-start"
          >
          <Title>
              Latest posts
          </Title> 

          <div 
              className="flex flex-col items-center mt-8"
              >
          {
          postItems.map((post: Post) => (
              <PostItem
              key={post.id}
              title={post.title}
              slug={post.slug}
              />))
          }
          </div>
        </div>
  );
}

export default LatestPosts;