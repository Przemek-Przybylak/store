import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsTiles } from "../../../common/products/ProductsTiles";
import { Header } from "../../header/header/Header";
import { actions, selectors } from "../state/ProductsSlice";

export const StorePage = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectors.selectDetails);

  useEffect(() => {
    dispatch(actions.fetch("products"));
  }, [dispatch]);
  return (
    <>
      <Header />
      <ProductsTiles products={allProducts} />
    </>
  );
};
