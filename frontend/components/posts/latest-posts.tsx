export const dynamic = 'force-dynamic';

import PostItem from "./post-item";
import { getLatestPostsGQL } from "@/gql-lib/queries";
import { gqlFetch } from "@/gql-lib/gql-fetch";
import Title from "@/ui/title";

type Post = {
    id: number;
    slug: string;
    title: string;
}

/**
   * This component is rendered at build time (part of app/page.tsx, SSG)
   * so the gqlFetch() call will return an error if the backend service is down.
   * In addition to this, new posts created on the backend will not be reflected
   * on this page, unless a rerender occurs. 
   */

async function LatestPosts(){

  const query = getLatestPostsGQL();
  const obj = await gqlFetch(query);

  if(obj instanceof Error){
    return (
      <div>
        Failed fetch blogs because the backend service was not available when this page was generated.
      </div>
    );
  }
  
  if(obj === undefined){
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