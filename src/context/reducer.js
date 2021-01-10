function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      const {item} = action.payload;
      const index = state.favorites.findIndex((fav) => fav.id === item.id);
      return index === -1
        ? {...state, favorites: [...state.favorites, item]}
        : state;

    // FAVORIDEN ÇIKARMA..

    default:
      return state;
  }
}

export default reducer;
