import { useEffect } from "react";
import SearchApi from "../apis/search.api";
import SearchTap from "../components/searchTab";

const MainPage = () => {
  const key = "ㄴ";
  useEffect(() => {
    (async () => {
      const data = await SearchApi.getSearch(key);
      console.log(data);
    })();
  }, []);

  return <SearchTap />;
};

export default MainPage;
