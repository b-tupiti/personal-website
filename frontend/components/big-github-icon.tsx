import Image from 'next/image';
import githubImg from '@/assets/github.webp'
import Link from 'next/link';

function BigGithubIcon() {
  return (
    <Link href={'https://github.com/b-tupiti'}>
      <Image 
        src={githubImg} 
        alt={''} className='text-white' 
        width={70}
      />
    </Link>
  );
}

export default BigGithubIcon;
