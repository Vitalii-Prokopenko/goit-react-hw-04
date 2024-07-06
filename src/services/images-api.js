import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const MY_ACCESS_KEY = "A3IJMAscSZ_PPoID7MVRaC7R0cGAafFCn_mQ3Mhxj_k";

export const fetchImagesWithTag = async (tag, currentPage) => {
  const response = await axios.get("search/photos?", {
    params: {
      query: tag,
      page: currentPage,
      client_id: MY_ACCESS_KEY,
    },
  });
  console.log(response);
  console.log(response.data.results);
  console.log(response.data.total_pages);
  return response.data;
};
