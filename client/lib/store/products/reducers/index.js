import { addToCart } from '../actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  products: []
}

// Uses the ES6 default arguments syntaxt
function catalogApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    default:
      return state;
  }
}
