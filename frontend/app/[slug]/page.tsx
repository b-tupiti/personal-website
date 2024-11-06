// importing and assigning blogs data
import blogsData from '@/posts.json';
import Container from '@/ui/container';
import Title from '@/ui/title';

// duplicate
type Post = {
  id: number;
  slug: string;
  title: string;
  readTime: string;
  content: string;
}
const posts: Post[] = blogsData;




export default function Post({ params }: { params: { slug: string } }) {

  const post: Post | undefined = posts.find(post => post.slug === params.slug);

  if(!post){
    return <h1>Post not found</h1>;
  }
  else {
    return (
      <section className='dark:bg-dark dark:text-white'>
        <div className="max-w-[720px] m-auto px-16 lg:px-0">
          <Title>{post.title}</Title>
          <h2>{post.readTime}</h2>
          <p>{post.content}</p>
        </div>
      </section>
    )
  }
  
}
