import PostItem from '@/components/post-item';

// importing posts
import data from '../posts.json';
import Title from "@/ui/title";
import Container from '@/ui/container';

type Post = {
  id: number;
  slug: string;
  title: string;
  readTime: string;
}
const postsList: Post[] = data;

const postItems = postsList.map((post: any) => {
  return (
      <PostItem 
              key={post.id}
              readTime={post.readTime} 
              title={post.title} 
              slug={post.slug}
      />
  )
})

function LatestPostsSection() {
  
    return (
      <section className='dark:bg-dark  px-6 py-16'>
        
        <div className="max-w-[720px] m-auto">
          <Title>
              Latest posts
            </Title> 
            
            <div className="flex flex-col items-center mt-8">
              {postItems}
            </div>
        </div>

          

        

        
      </section>
    );
}

export default LatestPostsSection;