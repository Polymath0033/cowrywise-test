import axios from "axios";

export const fetchUnsplashImages = async (query: string) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`
  );
  return response.data;
};
