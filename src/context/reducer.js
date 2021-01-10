function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      const {item} = action.payload;
      return {...state, favorites: [...state.favorites, item]};

    default:
      return state;
  }
}

export default reducer;
