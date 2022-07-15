const GET_ALL_DOCTORS_ACTION = "GET_ALL_DOCTORS_ACTION";
const DELETE_DOCTORS_ACTION = "DELETE_DOCTORS_ACTION";
const UPDATE_DOCTORS_ACTION = "UPDATE_DOCTORS_ACTION";
const ADD_DOCTORS_ACTION = "ADD_DOCTORS_ACTION";

const initialState = {
  doctors: [
    {
      id: 1,
      fullName: "John Michael",
      fatherName: "Alexa",
      personalCode: '0014569854',
      birthDate: "1354/11/12",
      surgeryDate: "1399/02/05",
      birthPlace: "Paris",
      addressPlace: "Paris",
      insuranceType: 'Insurance',
      phoneNumber: '09120245265',
      age: 70,
      gender: "Female",
      weight: 98,
      height: 70,
      BMI: "",
      doctor: "Laurent Perrier"
  },
  {
      id: 2,
      fullName: "Miriam Eric",
      fatherName: "Michael",
      personalCode: '00196547854',
      birthDate: "1378/11/02",
      surgeryDate: "1389/12/12",
      birthPlace: "London",
      addressPlace: "London",
      insuranceType: 'Insurance',
      phoneNumber: '09356598471',
      age: 40,
      gender: "Male",
      weight: 68,
      height: 60,
      BMI: "",
      doctor: "Richard Gran"
  }
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
