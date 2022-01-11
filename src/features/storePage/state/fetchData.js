export const fetchData = async ({ categories }) => {
  const response = await fetch(
    categories
      ? `https://fakestoreapi.com/products/`
      : `https://fakestoreapi.com/products/${categories}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
