const counterReducer = (state = 0, action) => {
  const key = 'radius';
  switch (action.type) {
    case 'INCREMENT':
      state = state + 1;
      localStorage.setItem(key, state);
      return state;
    case 'DECREMENT':
      if (state > 0) {
        state = state - 1;
        localStorage.setItem(key, state);
        return state;
      } else {
        localStorage.setItem(key, state);
        return state;
      }
    default :
      localStorage.setItem(key, state);
      return state;
  }
};

export default counterReducer;
