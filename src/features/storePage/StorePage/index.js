import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsTiles } from "../../../common/products/ProductsTiles";
import { Header } from "../../header/header/Header";
import { fetchAllProducts, selectAllProducts } from "../state/ProductsSlice";

export const StorePage = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <>
      <Header categories={allCategories} />
      <ProductsTiles products={products} />
    </>
  );
};
