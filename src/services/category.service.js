import { http } from "../api/http";

export const category = {
  getCategories: (params) =>
    http.request({
      method: "GET",
      url: "path",
      params: {
        ...params,
      },
    }),
};
