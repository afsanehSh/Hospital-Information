const GET_ALL_PATIENTS_ACTION = "GET_ALL_PATIENTS_ACTION";
const GET_PATIENT_BY_ID = "GET_PATIENT_BY_ID";
const DELETE_PATIENTS_ACTION = "DELETE_PATIENTS_ACTION";
const UPDATE_PATIENTS_ACTION = "UPDATE_PATIENTS_ACTION";
const ADD_PATIENTS_ACTION = "ADD_PATIENTS_ACTION";

const initialState = {
  patients: [
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
  getPatients: () => async (dispatch, getState) => {
    dispatch({ type: GET_ALL_PATIENTS_ACTION});
  },
  getPatientByID: id => async (dispatch, getState) => {
    dispatch({
      type: GET_PATIENT_BY_ID,
      patients: getState().patientsFiles.patients.filter(m => m.id !== id)
    });
  },
  removePatient: id => async (dispatch, getState) => {
    dispatch({
      type: DELETE_PATIENTS_ACTION,
      patients: getState().patientsFiles.patients.filter(m => m.id !== id)
    });
  },
  editPatient: patient => async (dispatch, getState) => {
    dispatch({
      type: UPDATE_PATIENTS_ACTION,
      patients: getState().patientsFiles.patients.map(
        m => (m.id === patient.id ? patient : m)
      )
    });
  },
  addPatient: patient => async (dispatch, getState) => {
    dispatch({
      type: ADD_PATIENTS_ACTION,
      patient: Object.assign({}, patient, { id: Math.random() })
    });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === GET_ALL_PATIENTS_ACTION) {
    return { ...state, patients: action.patients };
  }
  if (action.type === GET_PATIENT_BY_ID) {
    return { ...state, patients: action.patients };
  }
  if (action.type === DELETE_PATIENTS_ACTION) {
    return { ...state, patients: action.patients };
  }
  if (action.type === UPDATE_PATIENTS_ACTION) {
    return { ...state, patients: action.patients };
  }
  if (action.type === ADD_PATIENTS_ACTION) {
    return { ...state, patients: [...state.patients, action.patient] };
  }

  return state;
};
