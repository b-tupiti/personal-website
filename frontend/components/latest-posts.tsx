import Container from "./container";
import PostItem from './post-item';

const posts = [
    {
        id: 'sdfsdfersd',
        date: "Feb 02, 2023",
        title: "Deploying Django App with Domain Authentication",
    },
    {
        id: 'fsoajirwnwns;',
        date: "Mar 13, 2023",
        title: "Filtering Sets in a python list",
    },
    {
        id: 'asdjklafjepeamv',
        date: "Apr 29, 2023",
        title: "CICD with Github Actions",
    },
    {
        id: 'fsdfsrrrrrlss',
        date: "Jun 30, 2023",
        title: "The difference between git rebase and git merge",
    },
    {
        id: 'afgeiervmds',
        date: "Jul 19, 2023",
        title: "Tailwind is a game changer",
    },
]

function LatestPosts() {

  const latestBlogPosts = posts.map((post) => {
    return (
        <PostItem 
                key={post.id}
                id={post.id} 
                date={post.date} 
                title={post.title} 
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