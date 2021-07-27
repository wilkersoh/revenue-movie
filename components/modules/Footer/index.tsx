import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LINKS = {
  Media_Center: "#",
  Help_Center: "#",
  Service: "#",
  Privacy: "#",
  Contact_Us: "#",
  Term_of_Use: "#",
};

const index = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='py-4 mt-12 text-gray-500'>
      <Container>

        <div className="flex justify-center">
          <ul className="mr-10 md:mr-48">
            <li>
              <div className='h-24 w-28'>
                <Link href='https://www.themoviedb.org/'>
                  <a target='_blank'>
                    <div className='font-semibold'>API Provided</div>
                    <Image
                      src='/assets/tmdb.svg'
                      width={400}
                      height={400}
                      layout='responsive'
                    />
                  </a>
                </Link>
              </div>
            </li>
          </ul>

          <Lists links={LINKS} />

        </div>

        <div className='pb-2 mt-8 text-center text-sm'>
          &copy; Copyright {year}. Wilker Soh
        </div>
      </Container>
    </footer>
  );
};

const Lists = ({ links }) => {
  return (
    <ul>
      {Object.entries(links).map(([k, v], i) => (
        <li key={i}>
          <Link href={v}>
            <a>{k.split("_").join(" ")}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default index;
