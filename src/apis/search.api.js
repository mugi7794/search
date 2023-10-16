import { SearchInstance } from "./core";

const SearchApi = {
  async getSearch(key) {
    const res = await SearchInstance.get(`?key=${key}`);
    return res.data;
  },
};

export default SearchApi;
