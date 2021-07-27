import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useRouter } from "next/router";
import App from "@/components/layouts/index";
import Container from "@/components/Container";
import useSwr from "swr";
import { KEY } from "@/utils/urls";
import SkeletonVideo from "@/components/elements/SkeletonVideo";
import Details from "@/components/modules/Movie/Details";

const Index = ({ name }) => {
  const router = useRouter();

  const { data: video } = useSwr(
    `/${router.query.id}/videos?api_key=${KEY}`
  );
  const { data: details } = useSwr(
    `/${router.query.id}?api_key=${KEY}`
  );

  return (
    <App>
      <div>
        <div className='w-full aspect-w-16 aspect-h-9 flex h-sVideo md:h-mVideo'>
          {video?.results?.length ? (
            <iframe
              className='w-full object-contain'
              src={`https://www.youtube.com/embed/${video.results[0].key}`}
              title={name}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          ) : (
            <SkeletonVideo />
          )}
        </div>
        <div className='my-4'>
          <Container>
            <h1 className='capitalize text-lg'>{name.split("-").join(" ")}</h1>
            <Details {...details} />
          </Container>
        </div>
      </div>
    </App>
  );
};

export const getStaticPaths: GetStaticPaths<{ category: string }> =
  async () => {
    return {
      paths: [], //indicates that no page needs be created at build time
      fallback: "blocking", //indicates the type of fallback
    };
  };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params;

  return {
    props: {
      name,
    },
  };
};

export default Index;
