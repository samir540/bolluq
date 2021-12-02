import { init } from "@rematch/core";
import { isHide, settings, searchState } from "../rematches/rematches";

const store = init({
  models: {
    isHide,
    settings,
    searchState,
  },
});

export default store;
