import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../common/fetchData";
import { Products } from "../../../common/products/Products";
import { Header } from "../../header/header/Header";
import { actions, selectors } from "../state/ProductsSlice";

export const StorePage = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectors.selectProducts);
  console.log("prpdu");
  console.log(allProducts);

  useEffect(() => {
    dispatch(actions.fetch("products"));
  }, [dispatch]);
  return (
    <>
      <Header />
      {allProducts && <Products allProducts={allProducts} />}
    </>
  );
};
