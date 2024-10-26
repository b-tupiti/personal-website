import Hero from '@/components/hero';
import LatestPosts from '@/components/latest-posts';


// setting blog interface
type Post = {
  id: number;
  slug: string;
  title: string;
  date: string;
  content: string;
}
// importing and assigning blogs data
import blogsData from '../blogs.json';
const posts: Post[] = blogsData;

export default function Home() {
  return (
    <>
      <Hero/>
      <LatestPosts posts={posts}/>
    </>
  )
}
