import { init } from "@rematch/core";
import { isHide } from "../rematches/rematches";

const store = init({
  models: {
    isHide,
  },
});

export default store;
