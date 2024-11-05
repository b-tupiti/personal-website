import Link from 'next/link';
import Image from 'next/image';
import nookIcon from '@/assets/icons/nook-icon.svg';
import { ArrowLongRightIcon } from '@/icons/icons';

type PostItemProps = {
    readTime: string,
    title: string,
    slug: string,
}

function PostItem(post: PostItemProps){
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
            <span 
                className='dark:text-slate-300 grid-cols-1 text-slate-600'
                >
                {post.readTime}
            </span>
          
            <ArrowLongRightIcon 
                className="absolute right-0 top-1/2 -translate-y-1/2  size-6"
                />
        </Link>

    )
}

export default PostItem;