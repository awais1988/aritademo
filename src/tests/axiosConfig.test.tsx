import axios from "../config/axiosConfig";

test("axios instance is defined", () => {
  expect(axios).toBeDefined();
  expect(axios.interceptors.request).toBeDefined();
  expect(axios.interceptors.response).toBeDefined();
});
