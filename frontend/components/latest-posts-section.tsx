import Container from "@/ui/container";

import PostItem from '@/components/post-item';

// importing posts
import data from '../posts.json';
import FlexBox from "@/ui/flexbox";
import Title from "@/ui/title";

type Post = {
  id: number;
  slug: string;
  title: string;
  date: string;
}
const postsList: Post[] = data;

const postItems = postsList.map((post: any) => {
  return (
      <PostItem 
              key={post.id}
              date={post.date} 
              title={post.title} 
              slug={post.slug}
      />
  )
})

function LatestPostsSection() {
  
    return (
      <section className='dark:bg-[#0c2333] bg-[#f4f4f4] py-6'>
        <Container>

          <Title>
            Latest posts
          </Title> 
          
          <FlexBox 
            twstyle='flex flex-col gap-0.5 items-center m-auto py-6 p-2 
              lg:max-w-[60rem]'
          >
           {postItems}
          </FlexBox>

        </Container>
      </section>
    );
}

export default LatestPostsSection;