import Link from 'next/link';
import { ArrowLongRightIcon } from '@/icons/icons';

type PostItemProps = {
    title: string,
    slug: string,
}

const PostItem = (post: PostItemProps) => {
    return (

        <Link 
            className='text-slate-200 text-sm relative w-full bg-[#fffefe] flex flex-col gap-2 py-4 justify-start 
                         border-b border-b-slate-300 dark:border-b-slate-600 
                        dark:bg-dark' 
            href={post.slug}
            >
            <span 
                className='font-semibold lg:text-md lg:col-span-4 text-slate-800 dark:text-white'
                >
                {post.title}
            </span>
          
            <ArrowLongRightIcon 
                className="absolute right-0 top-1/2 -translate-y-1/2  size-6"
                />
        </Link>

    )
}

export default PostItem;