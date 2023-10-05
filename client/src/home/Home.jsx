import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

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
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discount for you" timer={false} />
        <Slide products={products} title="Suggested items" timer={false} />
        <Slide products={products} title="top selection" timer={false} />
        <Slide products={products} title="recommended items" timer={false} />
        <Slide products={products} title="trending offers" timer={false} />
        <Slide products={products} title="season top picks" timer={false} />
      </Component>
    </div>
  );
};

export default Home;
