import { BASE_URL } from "./urls";

const fetcher = async (path) => {
  const res = await fetch(`${BASE_URL}/movie${path}`);

  return res.json();
};

export default fetcher;
