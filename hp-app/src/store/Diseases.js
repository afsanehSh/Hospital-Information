const GET_ALL_DISEASES_ACTION = "GET_ALL_DISEASES_ACTION";
const DELETE_DISEASES_ACTION = "DELETE_DISEASES_ACTION";
const UPDATE_DISEASES_ACTION = "UPDATE_DISEASES_ACTION";
const ADD_DISEASES_ACTION = "ADD_DISEASES_ACTION";

const initialState = {
  diseases: [
    {
      id: 1,
      name: "covid 19",
      convalescence: "15 days",
      signs: "Fever, runny nose, sore throat",
      spread: 'breathing'
    },
    {
      id: 2,
      name: "Plague",
      convalescence: "",
      signs: "Enlargement of the lymph nodes in the thigh and groin",
      spread: 'As a result of human contact with animals'
    },
    {
      id: 3,
      name: "chicken pox",
      convalescence: "10-12 days",
      signs: "Fever, cough, headache, impatience, loss of appetite",
      spread: 'Viral infection'
    },
  ]
};

export const actionCreators = {
  getDiseases: () => async (dispatch, getState) => {
    dispatch({ type: GET_ALL_DISEASES_ACTION});
  },
  removeDisease: id => async (dispatch, getState) => {
    dispatch({
      type: DELETE_DISEASES_ACTION,
      diseases: getState().diseases.diseases.filter(m => m.id !== id)
    });
  },
  editDisease: disease => async (dispatch, getState) => {
    dispatch({
      type: UPDATE_DISEASES_ACTION,
      diseases: getState().diseases.diseases.map(
        m => (m.id === disease.id ? disease : m)
      )
    });
  },
  addDisease: disease => async (dispatch, getState) => {
    dispatch({
      type: ADD_DISEASES_ACTION,
      disease: Object.assign({}, disease, { id: Math.random() })
    });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === GET_ALL_DISEASES_ACTION) {
    return { ...state, diseases: action.diseases };
  }
  if (action.type === DELETE_DISEASES_ACTION) {
    return { ...state, diseases: action.diseases };
  }
  if (action.type === UPDATE_DISEASES_ACTION) {
    return { ...state, diseases: action.diseases };
  }
  if (action.type === ADD_DISEASES_ACTION) {
    return { ...state, diseases: [...state.diseases, action.disease] };
  }

  return state;
};
