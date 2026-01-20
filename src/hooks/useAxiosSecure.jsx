import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://krishi-link-server-eta.vercel.app",
  // baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
