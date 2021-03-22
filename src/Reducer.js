export const initialState = {
  user: null,
};

//selector
export const actionTypes = {
  SET_USER: "SET_USER",
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}

export default reducer;