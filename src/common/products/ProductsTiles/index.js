import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectAllProducts } from "../../state/ProductsSlice";

export const ProductsTiles = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  console.log(allProducts);
  return <>nanana</>;
};
