//包含所有的请求模块
import { get, post, uploadFile } from "./ajax";
//登录模块接口
const login = (ob, callback) => post("/login", ob, callback);
const home = (ob, callback) => get("/home", ob, callback);

let api = {
  reqLogin: login,
  reqHome: home,
};

export default api;
