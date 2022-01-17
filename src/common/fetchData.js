export const fetchData = async (path) => {
  const response = await fetch(path);
  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

export const fetchProducts = async () => {
  return await fetchData(`https://fakestoreapi.com/products/`);
};
