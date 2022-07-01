import { Image, Product, Wrapper } from "./styled";

export const Products = ({ allProducts }) => {
  console.log(allProducts);
  return (
    <>
      <Wrapper>
        {allProducts.map(({ image }) => (
          <Product>
            <Image src={image} />
          </Product>
        ))}
      </Wrapper>
    </>
  );
};
