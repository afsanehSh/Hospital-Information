const GET_ALL_EMPLOYEES_ACTION = "GET_ALL_EMPLOYEES_ACTION";
const DELETE_EMPLOYEES_ACTION = "DELETE_EMPLOYEES_ACTION";
const UPDATE_EMPLOYEES_ACTION = "UPDATE_EMPLOYEES_ACTION";
const ADD_EMPLOYEES_ACTION = "ADD_EMPLOYEES_ACTION";

const initialState = {
  employees: [
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
  getEmployees: () => async (dispatch, getState) => {
    dispatch({ type: GET_ALL_EMPLOYEES_ACTION});
  },
  removeEmployee: id => async (dispatch, getState) => {
    dispatch({
      type: DELETE_EMPLOYEES_ACTION,
      employees: getState().employees.employees.filter(m => m.id !== id)
    });
  },
  editEmployee: employee => async (dispatch, getState) => {
    dispatch({
      type: UPDATE_EMPLOYEES_ACTION,
      employees: getState().employees.employees.map(
        m => (m.id === employee.id ? employee : m)
      )
    });
  },
  addEmployee: employee => async (dispatch, getState) => {
    dispatch({
      type: ADD_EMPLOYEES_ACTION,
      employee: Object.assign({}, employee, { id: Math.random() })
    });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === GET_ALL_EMPLOYEES_ACTION) {
    return { ...state, employees: action.employees };
  }
  if (action.type === DELETE_EMPLOYEES_ACTION) {
    return { ...state, employees: action.employees };
  }
  if (action.type === UPDATE_EMPLOYEES_ACTION) {
    return { ...state, employees: action.employees };
  }
  if (action.type === ADD_EMPLOYEES_ACTION) {
    return { ...state, employees: [...state.employees, action.employee] };
  }

  return state;
};
