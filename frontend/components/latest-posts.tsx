import Container from "./container";
import PostItem from './post-item';

type Post = {
  id: number;
  slug: string;
  title: string;
  date: string;
}

type LatestPostsProps = {
  posts: Post[];
}


function LatestPosts({posts}: LatestPostsProps) {

  const latestBlogPosts = posts.map((post: any) => {
    return (
        <PostItem 
                key={post.id}
                date={post.date} 
                title={post.title} 
                slug={post.slug}
        />
    )
  })
  
    return (
      <section className=' dark:bg-dark bg-[#f4f4f4] py-6'>
        <Container>
          <h1 className="border-b border-b-slate-700 text-center capitalize text-2xl font-semibold text-slate-600 dark:text-slate-200 lg:max-w-[40rem] m-auto py-6">Latest posts</h1>  
          <div 
            className='flex flex-col gap-2 items-center m-auto py-6 p-2 
                       lg:max-w-[60rem]'
        >
           {latestBlogPosts}
        </div>
        </Container>
      </section>
    );
}

export default LatestPosts;