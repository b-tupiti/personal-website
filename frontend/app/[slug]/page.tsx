// importing and assigning blogs data
import blogsData from '@/posts.json';

// duplicate
type Post = {
  id: number;
  slug: string;
  title: string;
  date: string;
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
      <>
        <h1>{post.title}</h1>
        <h2>{post.date}</h2>
        <p>{post.content}</p>
      </>
    )
  }
  
}
