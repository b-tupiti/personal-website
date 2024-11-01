import Image from 'next/image';
import githubImg from '@/assets/github.webp'
import Link from 'next/link';

function BigGithubIcon() {
  return (
    <Link href={'https://github.com/b-tupiti'} className='ml-auto mr-4'>
      <Image 
        src={githubImg} 
        alt={''} className='text-white' 
        width={40}
      />
    </Link>
  );
}

export default BigGithubIcon;
