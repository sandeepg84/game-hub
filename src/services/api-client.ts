import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b11df20623cf4844803ef0d04c09d0ee",
  },
});
