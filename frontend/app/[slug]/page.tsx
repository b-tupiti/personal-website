// importing and assigning blogs data
import blogsData from '@/posts.json';
import Title from '@/ui/title';
import Image from 'next/image';
import { CalendayDaysIcon } from '@/icons/icons';

type PostContent = {
  contentType: 'paragraph' | 'quote' | 'image' | 'code',
  content: string,
}

// duplicate
type Post = {
  id: number,
  slug: string,
  title: string,
  postImageURL: string,
  readTime: string,
  body: PostContent[],
  date: string,
  author: string,
}



const posts: Post[] = blogsData as Post[];

export default function Post({ params }: { params: { slug: string } }) {

  const post: Post | undefined = posts.find(post => post.slug === params.slug);

  if(!post){
    return <h1>Post not found</h1>;
  }
  else {
    return (
      <section className='dark:bg-dark dark:text-white'>
        <div className="w-dvw lg:max-w-[720px] m-auto p-8 lg:py-0 lg:px-0">
          <div className='flex flex-col gap-y-6'>

          <div style={{ width: '100%', height: '300px', position: 'relative' }}> 
            <Image 
              src={post.postImageURL} 
              alt="Sample Image"
              layout="fill"
              objectFit="cover" 
            />
          </div>
            
            <div className='flex flex-col gap-2'>
              <h4 className='dark:text-slate-200'> By <strong>{post.author}</strong></h4>
              <h5 className='text-slate-400 flex gap-x-2'>
                 <CalendayDaysIcon className="size-6" />
                 {post.date}
              </h5>
            </div>

            <div className='mt-8'>
              <Title>{post.title}</Title>
            </div>
         
            {post.body.map((item, index) => {
              switch (item.contentType) {
                case 'paragraph':
                  return <p className='text-slate-700 dark:text-slate-300 tracking-normal leading-loose' key={index}>{item.content}</p>;
                case 'quote':
                  return <blockquote className='p-4 text-lg border-l-4 bg-slate-200 dark:bg-slate-700' key={index}>&ldquo;{item.content}&rdquo;</blockquote>;
                case 'image':
                  return <Image 
                          key={index} 
                          src={item.content} 
                          width={200}
                          height={200}
                          alt="Post image" 
                          />
                          ;
                case 'code':
                  return (
                    
                    // <div key={index} className='py-1 border border-red-300 min-w-full max-w-full m-auto overflow-x-scroll'>
                      <pre key={index} className=' rounded  p-4 pb-6 bg-[#07151f] overflow-x-scroll'>
                      <code className='font-mono font-light text-slate-300' >{item.content}</code>
                      </pre>
                    // </div>
                    
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </section>
    )
  }
  
}
