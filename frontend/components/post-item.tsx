import Link from 'next/link';
import Image from 'next/image';
import nookIcon from '@/assets/icons/nook-icon.svg';

type PostItemProps = {
    id: string,
    date: string,
    title: string,
}

function PostItem(post: PostItemProps){
    return (

        <Link 
            key={post.id} 
            className='text-slate-200 text-sm relative w-full px-6 py-6 bg-slate-200 grid rounded-md gap-4 justify-between items-center 
                        lg:static lg:py-8 lg:grid-cols-6
                        dark:bg-[#0e283a] dark:hover:bg-[#0f2a3d]' 
            href={''}
            >
            <span 
                className='dark:text-slate-300 grid-cols-1 text-slate-600'
                >
                {post.date}
            </span>
            <span 
                className='font-semibold lg:text-lg lg:col-span-4 text-slate-800 dark:text-white'
                >
                {post.title}
            </span>
            <Image 
                className='absolute top-0 right-0 lg:static lg:ml-auto' 
                src={nookIcon} 
                alt={'nook icon'} 
                width={20} 
            />
        </Link>

    )
}

export default PostItem;