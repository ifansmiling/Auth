//File Env FE
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.klinikasysyifa.my.id/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk menangkap respons dan menyimpan token ke localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

//File DB BE
const Sequelize = require("sequelize");

const db = new Sequelize(
  "jlwdtptq_db_klinik",
  "jlwdtptq_admin",
  "LxC&5*,gn!%.",
  {
    host: "api.klinikasysyifa.my.id",
    dialect: "mysql",
  }
);

const database = db;

module.exports = database;
