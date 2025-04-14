import PostItem from "./post-item";
import { getLatestPostsGQL } from "@/gql-lib/queries";
import { gqlFetch } from "@/gql-lib/gql-fetch";
import Title from "@/ui/title";
import { Suspense } from "react";

type Post = {
    id: number;
    slug: string;
    title: string;
}

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
  
  let postItems = obj.data.data.pages;
    
  return ( 
      
      <div 
            className="flex flex-col items-center md:items-start"
          >
          <Title>
              Latest posts
          </Title> 

          <Suspense fallback={<div>fall back</div>}>
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
          </Suspense>

        </div>
  );
}

export default LatestPosts;