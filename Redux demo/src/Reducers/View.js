const viewReducer = (state = 0, action) => {
  let myItem = localStorage.getItem('radius');
  switch (action.type) {
    case 'SHOW':
      if (myItem > 0) {
        let count=myItem * myItem * 3.14;
        return count;
      } else {
        return 'Cannot calculate';
      }
    default:
      return state;
  }
};

export default viewReducer;
