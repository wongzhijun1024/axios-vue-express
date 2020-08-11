//封装axios
import axios from "axios";
import qs from "qs";

const http = axios.create({
  baseURL: "http://localhost:9999",
  timeout: 1000 * 180,
});

// 添加请求拦截器
http.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const get = function(api, object, callback) {
  http(api, {
    params: object,
  }).then((response) => {
    callback(response.data);
  });
};

const post = function(api, object, callback) {
  http
    .post(api, qs.stringify(object))
    .then(function(response) {
      callback(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

const uploadFile = function(api, object, callback) {
  //创建form对象
  let param = new FormData();
  for (let key in object) {
    param.append(key, object[key]);
  }
  let config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }; //添加请求头
  http.post(api, param, config).then((response) => {
    callback(response.data);
  });
};

export { get, post, uploadFile };
