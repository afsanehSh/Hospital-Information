import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as SideMenu from "../store/SideMenu";
import * as Deseases from "../store/Deseases";
import * as PatientsFiles from "../store/PatientsFiles";
import * as Doctors from "../store/Doctors";
import * as Employees from "../store/Employees";

export default function configureStore(initialState) {
  const reducers = {
    sideMenu: SideMenu.reducer,
    deseases: Deseases.reducer,
    patientsFiles: PatientsFiles.reducer,
    doctors: Doctors.reducer,
    employees: Employees.reducer,
  };

  const middleware = [thunk];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
