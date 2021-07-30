import {useState, useEffect} from "react"
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/client";
import Account from "@/components/Account";
import Container from "@/components/Container";
import Search from "@/components/Search";

const index: React.FC = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", controlNav);

    return () => {
      window.removeEventListener("scroll", controlNav)
    }
  }, [])

  const controlNav = () => {
    if(window.scrollY > 120) setShow(false)
    else setShow(true);
  }



  return (
    <>
      <header
        className={`flex py-2 h-14 fixed top-0 w-full transition-top ease-in-out duration-700 z-10 ${
          !show && "-top-24"
        }`}>
        <Container classes='w-full'>
          <nav className='flex justify-between items-center h-full'>
            <div className='bg-yellow-300 py-1 px-2 rounded-sm font-sans font-black'>
              <Link href='/'>
                <a className="focus:outline-none focus:border-0">
                  <p>TMDB</p>
                </a>
              </Link>
            </div>
            <div className='flex items-center'>
              <Search />
              <Account />
            </div>
          </nav>
        </Container>
      </header>
      {/* fake header height */}
      <div className='py-2 h-14'></div>
    </>
  );
};

export default index;
