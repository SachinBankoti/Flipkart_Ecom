import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
const Home = () => {
  // const getProduct = useSelector( state => state.getProducts);
  // const { products } = getProduct;
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </div>
  );
};

export default Home;
