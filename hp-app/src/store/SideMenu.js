const toggleMenu = 'TOGGLE_MENU';
const initialState = { smallMenu: false };

export const actionCreators = () => {
  return async (dispatch) => {
    dispatch({ type: toggleMenu })
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === toggleMenu) {
    return { ...state, smallMenu: !state.smallMenu};
  }

  return state;
};
