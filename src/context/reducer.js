function reducer(state, action) {
  console.log('REDUCER');
  console.log('REDUCER ACTION', action);
  console.log('REDUCER STATE', state);
  switch (action.type) {
    case 'ADD_USER':
      const {userData} = action.payload;
      const newArray = [...state.userList, userData];
      return {...state, userList: newArray};

    default:
      return state;
  }
}

export default reducer;
