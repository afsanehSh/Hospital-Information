import React, { useEffect, useState } from "react";
import {
  Button,
  Header,
  Icon,
  Segment,
  Table
} from "semantic-ui-react";
import { actionCreators } from "../store/PatientsFiles";
import { useSelector, useDispatch } from 'react-redux';
import { patientsFilesModel } from '../models/patientsFilesModel';
import { useNavigate } from "react-router-dom";

const Patients = (props) => {

  const dispatch = useDispatch();
  const [patient, setPatient] = useState(patientsFilesModel);
  let navigate = useNavigate(); 

  const patientsList = useSelector(state => state.patientsFiles.patients);

  useEffect(()=>{
    dispatch(actionCreators.getPatients);
    if(patientsList){
        setPatient(patientsList);
    }
    }, [dispatch])

    const patientFile = (patientId) =>{
      navigate('/patientFile', {state:{patientId: patientId}});
    }

    return [
      <Segment>
        <Header>
          <span style={{fontSize: '15px', fontFamily: "IRANSANS_Bold", textAlign: 'right'}}>Patient Information</span>
        </Header>
        <Table compact celled style={{textAlign: 'center'}}>
          <Table.Header fullWidth>
            <Table.Row>
            <Table.HeaderCell style={{borderLeft: '1px solid #E8E8E8'}}>FullName</Table.HeaderCell>
              <Table.HeaderCell>Father Name</Table.HeaderCell>
              <Table.HeaderCell>Personal Code</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>opt</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          { patientsList.map((patient) => {
            return (
            <React.Fragment key={patient.id}>
            <Table.Body>
              <Table.Row>
                  <Table.Cell style={{borderLeft: '1px solid #E8E8E8'}}>{patient.fullName}</Table.Cell>
                  <Table.Cell>{patient.fatherName}</Table.Cell>
                  <Table.Cell>{patient.personalCode}</Table.Cell>
                  <Table.Cell>{patient.phoneNumber}</Table.Cell>
                  <Table.Cell>{patient.gender}</Table.Cell>
                  <Table.Cell>
                    <Button style={{fontSize: '12px'}} onClick={() => patientFile(patient.id)} size="mini" icon>Patient File</Button>
                  </Table.Cell>
              </Table.Row>
            </Table.Body>
            </React.Fragment>
          )})}
        </Table>
      </Segment>
    ]
}

export default Patients;