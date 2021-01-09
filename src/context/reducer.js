function reducer(state, action) {
  switch (action.type) {
    case 'ADD_USER':
      const {user} = action.payload;
      const newArray = [...state.userList, user];
      return {...state, userList: newArray};

    default:
      return state;
  }
}

export default reducer;
