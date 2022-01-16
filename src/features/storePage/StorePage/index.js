import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../common/fetchData";
import { ProductsTiles } from "../../../common/products/ProductsTiles";
import { Header } from "../../header/header/Header";
import { actions, selectors } from "../state/ProductsSlice";

export const StorePage = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectors.selectProducts);
  const selectStatus = useSelector(selectors.selectStatus);

  console.log(selectStatus);

  useEffect(() => {
    dispatch(actions.fetch("products"));
  }, [dispatch]);
  return (
    <>
      <Header />
      {allProducts && <ProductsTiles allProducts={allProducts} />}
    </>
  );
};
