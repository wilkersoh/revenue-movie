import { API_URL } from "./urls";

export default async (path) => {
  const res = await fetch(`${API_URL}${path}`);

  return res.json();
};
