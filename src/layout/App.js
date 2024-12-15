import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Deseases from '../pages/Deseases';
import Files from '../pages/files/Files';
import PatientsFiles from '../pages/files/PatientsImformaionFiles/PatientsFiles';
import Patients from '../pages/Patients';
import Doctors from '../pages/Doctors';
import Employees from '../pages/Employees';

export default () => (
  <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/deseases" element={<Deseases />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="patientFile" element={<Files />} >
          <Route path=":patientId" element={<PatientsFiles /> } />
        </Route>
      </Routes>
    </Layout>
  </Router>
);
