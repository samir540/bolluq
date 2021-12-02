export const isHide = {
  state: false,
  reducers: {
    hide(state, payload) {
      return payload;
    },
  },
};

export const settings = {
  state: null,
  reducers: {
    dispatchSettings(state, payload) {
      return payload;
    },
  },
};

export const searchState = {
  state: null,
  reducers: {
    dispatchSearch(state, payload) {
      return payload;
    },
  },
};
