// state here is just the piece of the application state that is
// concerned with this reducer

export default (state = null, action) => {
  switch (action.type) {
    case 'SELECTED_ITEMS_BILL':	  
      return action.payload;
      break;
    default:
      return state;
  }
}
