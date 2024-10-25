import Logo from '@/components/logo'
import NavItem from './nav-item';
import Image from 'next/image';
import img from '@/assets/github.webp'

function Navbar({children}: any) {
  return (
    <>

        <div className="my-auto animate-fadein ">
          <Image src={img} alt={''} className='text-white' width={70}/>
        </div>

    </>
  );
}

export default Navbar;
