import Title from '@/ui/title';
import Image from 'next/image';
import { CalendayDaysIcon } from '@/icons/icons';
import { notFound } from 'next/navigation';
import Code from '@/components/code';
import { getPostBySlugGQL } from '../../gql-lib/queries';
import { gqlFetch } from '@/gql-lib/gql-fetch';


async function PostPage({ params }: {
  params: Promise<{ slug: string }>
}) {

  const query = getPostBySlugGQL((await params).slug);
  const obj = await gqlFetch(query);

  if (obj instanceof Error)
    return <div>Blog service is unavailable</div>;
   
  if(obj == null)
    return notFound();

  const post = obj.data.data.page;

  return (

    <section className='dark:bg-dark dark:text-white'>

      <div className="w-dvw lg:max-w-[720px] m-auto p-8 lg:py-0 lg:px-0">
        <div className='flex flex-col gap-y-6'>

        <div className='flex flex-col gap-2'>
          <h4 className='dark:text-slate-200'> By <strong>{post.owner}</strong></h4>
          <h5 className='text-slate-400 flex gap-x-2'>
            <CalendayDaysIcon className="size-6" />
              {post.date}
          </h5>
        </div>

        <div className='mt-8'>
          <Title>{post.title}</Title>
        </div>


  <section className='flex flex-col gap-y-10'>
  {post.body.map((item: any) => {
    switch (item.field) {
      case 'paragraph':
        return <div className='text-slate-700 dark:text-slate-300 tracking-normal leading-loose' key={item.id} dangerouslySetInnerHTML={{ __html: item.rawValue }}></div>
      case 'quote':
        return <blockquote className='p-4 text-lg border-l-4 bg-slate-200 dark:bg-slate-700' key={item.id}>&ldquo;{item.rawValue}&rdquo;</blockquote>;
      case 'image':
        return <div 
                  key={item.id}  
                  style={{ width: '100%', height: '300px', position: 'relative' }}>
                    <Image 
                      src={`/media/${item.image.file}`} 
                      fill
                      style={{ objectFit: "cover" }} 
                      alt={`/media/${item.image.file}`} 
                      unoptimized
                       />
                </div>
      ;
      case 'code':
        return (
            <Code key={item.id} content={item.rawValue}/>
        );
      default:
        return null;
    }
  })} 
  </section>

</div>
</div>
        
      </section>
    )
}

export default PostPage;