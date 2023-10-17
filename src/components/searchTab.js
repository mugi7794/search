import styled from "styled-components";
import { flexAlignCenter } from "../styled/common";
import { useState } from "react";
import SearchApi from "../apis/search.api";

const SearchTap = () => {
  const [search, setSearch] = useState([]);
  const [RecentList, setRecentList] = useState([]);
  const [keyWord, setKeyWord] = useState("");

  const onTypeChange = async (e) => {
    e.preventDefault();
    setKeyWord(e.target.value);
    try {
      const data = await SearchApi.getSearch(e.target.value);
      console.log(data);
      setSearch(data);
    } catch (err) {
      console.error(err.response.data);
      setSearch([err.response.data]);
    }
  };

  const onClickSearch = () => {
    if (RecentList.length >= 5) {
      RecentList.pop();
      setRecentList([keyWord, ...RecentList]);
    } else {
      setRecentList([keyWord, ...RecentList]);
    }
  };
  return (
    <>
      <Wrap>
        <InputContainer>
          <input
            type="text"
            onChange={onTypeChange}
            placeholder="검색어를 입력해주세요"
          ></input>
          <button onClick={() => onClickSearch()}>검색버튼</button>
        </InputContainer>
        <RecentContainer>
          {RecentList.length >= 1 && (
            <>
              <div>최근검색어</div>
              <ul>
                {RecentList.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            </>
          )}
        </RecentContainer>
        <div>관련검색어</div>
        <ul>
          {search.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </Wrap>
    </>
  );
};

export default SearchTap;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  ${flexAlignCenter}
  flex-direction: column;
`;

const InputContainer = styled.div``;

const RecentContainer = styled.div``;
