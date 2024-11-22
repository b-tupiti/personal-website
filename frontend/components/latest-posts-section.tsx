import Title from "@/ui/title";
import LatestPosts from './latest-posts';
import Container from "@/ui/container";

// TODO: This section should not render if data fetch fails
const LatestPostsSection = () => {

    return (
      <section 
        className='dark:bg-dark  px-6 py-16'
        >
        <Container className="max-w-[720px]">
          
          <div 
            className="flex flex-col items-center md:items-start"
          >
          <Title>
              Latest posts
            </Title> 
            
            <div 
              className="flex flex-col items-center mt-8"
              >
              <LatestPosts /> 
            </div>
          </div>

        </Container>
      </section>
    );
}

export default LatestPostsSection;