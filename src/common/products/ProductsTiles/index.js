export const ProductsTiles = ({ allProducts }) => {
  console.log(allProducts);
  return (
    <>
      <section>
        {allProducts.map(({ id, title, price }) => (
          <article key={id}>
            <span>{id}</span>
            <p>{title}</p>
            <span>{price}</span>
          </article>
        ))}
      </section>
    </>
  );
};
