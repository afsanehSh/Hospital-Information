const GET_ALL_DOCTORS_ACTION = "GET_ALL_DOCTORS_ACTION";
const DELETE_DOCTORS_ACTION = "DELETE_DOCTORS_ACTION";
const UPDATE_DOCTORS_ACTION = "UPDATE_DOCTORS_ACTION";
const ADD_DOCTORS_ACTION = "ADD_DOCTORS_ACTION";

const initialState = {
  doctors: [
    {
        id: 1,
        fullName: "زهرا فاطمی",
        fatherName: "علی",
        personalCode: '0014569854',
        birthDate: "1354/11/12",
        birthPlace: "تهران",
        addressPlace: "تهران",
        phoneNumber: '09120245265',
        age: 70,
    },
    {
        id: 2,
        fullName: "علی پارسا",
        fatherName: "فرشاد",
        personalCode: '0015269854',
        birthDate: "1370/02/02",
        birthPlace: "ارومیه",
        addressPlace: "تهران",
        phoneNumber: '09356699854',
        age: 30,
    },
  ]
};

export const actionCreators = {
  getDoctors: () => async (dispatch, getState) => {
    dispatch({ type: GET_ALL_DOCTORS_ACTION});
  },
  removeDoctor: id => async (dispatch, getState) => {
    dispatch({
      type: DELETE_DOCTORS_ACTION,
      doctors: getState().doctors.doctors.filter(m => m.id !== id)
    });
  },
  editDoctor: doctor => async (dispatch, getState) => {
    dispatch({
      type: UPDATE_DOCTORS_ACTION,
      doctors: getState().doctors.doctors.map(
        m => (m.id === doctor.id ? doctor : m)
      )
    });
  },
  addDoctor: doctor => async (dispatch, getState) => {
    dispatch({
      type: ADD_DOCTORS_ACTION,
      doctor: Object.assign({}, doctor, { id: Math.random() })
    });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === GET_ALL_DOCTORS_ACTION) {
    return { ...state, doctors: action.doctors };
  }
  if (action.type === DELETE_DOCTORS_ACTION) {
    return { ...state, doctors: action.doctors };
  }
  if (action.type === UPDATE_DOCTORS_ACTION) {
    return { ...state, doctors: action.doctors };
  }
  if (action.type === ADD_DOCTORS_ACTION) {
    return { ...state, doctors: [...state.doctors, action.doctor] };
  }

  return state;
};
