/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { instance } from "./instance";

const resultSearch = () => {
  return instance.get("/search");
};
export {
    resultSearch,
};
