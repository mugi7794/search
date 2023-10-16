import styled from "styled-components";
import { flexAlignCenter } from "../styled/common";
import { useState } from "react";
import SearchApi from "../apis/search.api";

const SearchTap = () => {
  const [search, setSearch] = useState("");
  const onTypeChange = async (e) => {
    try {
      const data = await SearchApi.getSearch(e.target.value);
      console.log(data);
      setSearch(data);
    } catch (err) {
      setSearch(err.response.data);
    }
  };
  return (
    <>
      <Wrap>
        <input type="text" onChange={onTypeChange}></input>
        {search}
      </Wrap>
    </>
  );
};

export default SearchTap;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  ${flexAlignCenter}
`;
