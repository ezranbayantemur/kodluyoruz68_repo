function reducer(state, action) {
  switch (action.type) {
    case 'ADD_USER':
      const {userData} = action.payload;
      const newArray = [...state.userList, userData];
      return {...state, userList: newArray};

    case 'ACTIVATE_USERS':
      return {...state, activeString: 'USERS ACTIVE'};

    default:
      return state;
  }
}

export default reducer;
