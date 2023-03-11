import { http } from "../api/http";

export const product = {
  getProducts: (params) =>
    http.request({
      method: "GET",
      url: "/products",
      params: {
        ...params,
      },
    }),
};
