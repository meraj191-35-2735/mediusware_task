import axios from "axios";
import { baseUrl } from "../config/apiUrl";

const Contact = {
  getAllList: (page = 1, limit = 10) => {
    return axios.get(
      `${baseUrl.mediusWare}/contacts/?page=${page}&page_size=${limit}`
    );
  },
  usContactList: (country) => {
    return axios.get(
      `${baseUrl.mediusWare}/country-contacts/${country}/?page=${page}&page_size=${limit}`
    );
  },
};

export default Contact;
