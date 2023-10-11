import React, { useEffect, useState } from "react";
import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getProducts } from "../../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  display: flex;
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
  display: flex;
  color: blue;
  padding: 5px;
`;
const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const getText = (text) => {
    setText(text);
  };
  console.log(products);
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products,brands and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setText("")}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
