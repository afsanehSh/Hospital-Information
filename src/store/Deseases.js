const GET_ALL_DESEASES_ACTION = "GET_ALL_DESEASES_ACTION";
const DELETE_DESEASES_ACTION = "DELETE_DESEASES_ACTION";
const UPDATE_DESEASES_ACTION = "UPDATE_DESEASES_ACTION";
const ADD_DESEASES_ACTION = "ADD_DESEASES_ACTION";

const initialState = {
  deseases: [
    {
      id: 1,
      name: "covid 19",
      convalescence: "15 روز",
      signs: "تب، آبریزش بینی، گلودرد",
      spread: 'تنفس'
    },
    {
      id: 2,
      name: "طاعون",
      convalescence: "",
      signs: "بزرگ شدن غدد لنفاوی در ران و کشاله ران",
      spread: 'در اثر تماس انسان با حیوانات'
    },
    {
      id: 3,
      name: "آبله ‌مرغان",
      convalescence: "۱۰-۱۲ روز",
      signs: "تب، سرفه، سردرد، بی حوصلگی، بی اشتهایی",
      spread: 'عفونت ویروسی'
    },
  ]
};

export const actionCreators = {
  getDeseases: () => async (dispatch, getState) => {
    dispatch({ type: GET_ALL_DESEASES_ACTION});
  },
  removeDesease: id => async (dispatch, getState) => {
    dispatch({
      type: DELETE_DESEASES_ACTION,
      deseases: getState().deseases.deseases.filter(m => m.id !== id)
    });
  },
  editDesease: desease => async (dispatch, getState) => {
    dispatch({
      type: UPDATE_DESEASES_ACTION,
      deseases: getState().deseases.deseases.map(
        m => (m.id === desease.id ? desease : m)
      )
    });
  },
  addDesease: desease => async (dispatch, getState) => {
    dispatch({
      type: ADD_DESEASES_ACTION,
      desease: Object.assign({}, desease, { id: Math.random() })
    });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === GET_ALL_DESEASES_ACTION) {
    return { ...state, deseases: action.deseases };
  }
  if (action.type === DELETE_DESEASES_ACTION) {
    return { ...state, deseases: action.deseases };
  }
  if (action.type === UPDATE_DESEASES_ACTION) {
    return { ...state, deseases: action.deseases };
  }
  if (action.type === ADD_DESEASES_ACTION) {
    return { ...state, deseases: [...state.deseases, action.desease] };
  }

  return state;
};
