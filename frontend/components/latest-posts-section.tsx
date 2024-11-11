import Title from "@/ui/title";
import LatestPosts from './latest-posts';

async function LatestPostsSection() {

    return (
      <section className='dark:bg-dark  px-6 py-16'>
        <div className="max-w-[720px] m-auto">
          <Title>
              Latest posts
            </Title> 
            
          <div className="flex flex-col items-center mt-8">
            <LatestPosts /> 
          </div>

        </div>
      </section>
    );
}

export default LatestPostsSection;