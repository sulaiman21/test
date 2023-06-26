import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../../components/Filters";
import BaseLayout from "../../layouts";
import { getProductList } from "../../redux/reducers/productList/product.actions";
import RenderListItems from "./components/RenderListItems";

const HomePage = () => {
  const { loading, items } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <BaseLayout>
      {loading ? (
        <Typography data-testid="loading">Loading...</Typography>
      ) : (
        <>
          <Filters />
          <RenderListItems items={items} />
        </>
      )}
    </BaseLayout>
  );
};

export default HomePage;
