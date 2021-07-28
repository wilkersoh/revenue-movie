import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import useObserver from "@/utils/useObserver";
import Container from "@/components/Container";
import App from "@/components/layouts/index";
import LoadMoreBtn from "@/components/modules/Movies/LoadMoreBtn";
import Page from "@/components/modules/Movies/Page";
import { ProviderFilter, useFilter } from "@/utils/useFilters";
import Filter from "@/components/modules/Movies/Filter";

const Pages = ({ category, pageCount, setPageCount }) => {
  const pages = [];

  const [setRef, isVisible] = useObserver({
    threshold: 0.4,
  });
  const { search } = useFilter();

  for (let i = 2; i <= pageCount; i++) {
    pages.push(<Page currentPage={i} category={category} key={i} />);
  }


  return (
    <>
      <div>{pages}</div>
      <div className={`mt-4 h-12 relative ${search.length && "hidden"}`} ref={setRef}>
        <LoadMoreBtn
          setPageCount={setPageCount}
          pageCount={pageCount}
          isVisible={isVisible}
        />
      </div>
    </>
  );
};

const index = ({ category }) => {
  const [pageCount, setPageCount] = useState(2); // @default pageCount start from : 2

  return (
    <App>
      <ProviderFilter>
        <Container>
          <div className='flex justify-between items-center'>
            <h1 className='capitalize text-lg font-black py-4'>{category}</h1>
            <Filter category={category} />
          </div>

          <Pages
            category={category}
            pageCount={pageCount}
            setPageCount={setPageCount}
          />
        </Container>
      </ProviderFilter>
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
  return {
    props: {
      category: params.category,
    },
  };
};

export default index;
