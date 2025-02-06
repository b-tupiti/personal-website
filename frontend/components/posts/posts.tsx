import LatestPosts from './latest-posts';
import Container from "@/ui/container";

const Posts = async() => {
    return (
      <section 
        className='dark:bg-dark  px-6 py-16'
        >
        <Container className="max-w-[720px]">
          <LatestPosts/>
        </Container>
      </section>
    );
}

export default Posts;