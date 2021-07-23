import {useState, useEffect} from "react"

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
        className={`flex py-2 h-14 fixed top-0 w-full transition-top ease-in-out duration-700 ${
          !show && "-top-24"
        }`}>
        <Container classes='w-full'>
          <nav className='flex justify-between items-center'>
            <div className='bg-yellow-300 py-1 px-2 rounded-sm font-sans font-black'>
              <p>TMDB</p>
            </div>
            <div className='flex'>
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
