import axios from "axios";

export default {
  // gets page with the given id
  getPage: function (id) {
    return axios.get("/api/page/" + id);
  },
};
