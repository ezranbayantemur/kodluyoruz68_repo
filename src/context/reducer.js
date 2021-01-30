export default function (state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const {product} = action.payload;

      const productIndex = state.cart.findIndex(
        (item) => item.id === product.id,
      );

      return productIndex === -1
        ? {...state, cart: [...state.cart, product]}
        : {...state, cart: state.cart.filter((item) => item.id !== product.id)};

    case 'DELETE_CART':
      return {...state, cart: []};

    default:
      return state;
  }
}
