const GET_ALL_EMPLOYEES_ACTION = "GET_ALL_EMPLOYEES_ACTION";
const DELETE_EMPLOYEES_ACTION = "DELETE_EMPLOYEES_ACTION";
const UPDATE_EMPLOYEES_ACTION = "UPDATE_EMPLOYEES_ACTION";
const ADD_EMPLOYEES_ACTION = "ADD_EMPLOYEES_ACTION";

const initialState = {
  employees: [
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
