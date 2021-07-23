export default async (url, token) => {
  const res = await fetch(url, {
    method: "GET",
  });

  return res.json();
};
