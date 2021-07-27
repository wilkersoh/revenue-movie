import React, {useState} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import App from "@/components/layouts/index";
import Image from "next/image";
import Container from "@/components/Container";
import useSWR from "swr";
import { imageUrl, KEY, BASE_URL } from "@/utils/urls";
import SkeletonImage from "@/components/elements/SkeletonImage";
import { dashString } from "@/utils/dashString";

const fetcher = (url) => fetch(url).then((r) => r.json());

const search = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    `${BASE_URL}/search/movie?query=${router.query?.keyword}&api_key=${KEY}`,
    fetcher
  );

  if (error) {
    return (
      <App>
        <Container>
          <div className='text-center mt-4'>
            <h2>Failed to load, please try again.</h2>
          </div>
        </Container>
      </App>
    );
  }

  if (!data) {
    return (
      <App>
        <Container>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 first:mt-0 mt-4'>
            {new Array(12).fill("").map((_, i) => (
              <SkeletonImage key={i} />
            ))}
          </div>
        </Container>
      </App>
    );
  }

  return (
    <App>
      <Container>
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 first:mt-0 mt-4'>
          {data?.results &&
            data.results.map((movie, i) => {
              const title =
                movie?.title || movie?.original_title || movie?.original_name;
              return (
                <li key={movie.id}>
                  <Link href={`/movie/${dashString(title)}?id=${movie.id}`}>
                    <a>
                      <Image
                        src={imageUrl(movie)}
                        alt={movie.title}
                        width={680}
                        height={400}
                        layout='responsive'
                      />
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </Container>
    </App>
  );
};

export default search;
