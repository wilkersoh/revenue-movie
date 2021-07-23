// fetch("url.com", { qs: { a: 1, b: 2 } });

export default async (url, token) => {
  const res = await fetch(url, {
    method: "GET",
  });

  return res.json();
};
