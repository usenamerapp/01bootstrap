import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://fkr93.sse.codesandbox.io/api/"
});

export default {
  getTasks(page, limit) {
    return instance.get(`tasks?page=${page}&limit=${limit}`);
  }
};
