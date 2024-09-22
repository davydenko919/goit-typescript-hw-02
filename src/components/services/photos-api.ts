import axios from "axios";
import { ApiResponse } from "../types";

export const fetchPhotosApi = async (
  searchValue: string,
  pageNumber: number = 1
): Promise<ApiResponse> => {
  const params = {
    client_id: "gd4G_sgygMUkO02KFlkJH-wK01AAv8zBPJEiuMZ0zQU",
    query: searchValue,
    page: pageNumber,
    orientation: "landscape",
    per_page: 20,

  };
  const { data } = await axios.get<ApiResponse>(
    "https://api.unsplash.com/search/photos?",
    {
      params,
      headers: {
        "Accept-Version": "v1",
      },
    }
  );
  return data;
};