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
          <span style={{fontSize: '15px', fontFamily: "IRANSANS_Bold", textAlign: 'right'}}>اطلاعات بیمار</span>
        </Header>
        <Table compact celled style={{textAlign: 'center'}}>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell style={{borderLeft: '1px solid #E8E8E8'}}>نام و نام خانوادگی بیمار</Table.HeaderCell>
              <Table.HeaderCell>نام پدر</Table.HeaderCell>
              <Table.HeaderCell>کدملی بیمار</Table.HeaderCell>
              <Table.HeaderCell>شماره تماس بیمار</Table.HeaderCell>
              <Table.HeaderCell>جنسیت</Table.HeaderCell>
              <Table.HeaderCell>عملیات</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          { patientsList.map((patient, index) => {
                          return (
                          <>
            <Table.Body key={index}>
                    <Table.Row>
                        <Table.Cell style={{borderLeft: '1px solid #E8E8E8'}}>{patient.fullName}</Table.Cell>
                        <Table.Cell>{patient.fatherName}</Table.Cell>
                        <Table.Cell>{patient.personalCode}</Table.Cell>
                        <Table.Cell>{patient.phoneNumber}</Table.Cell>
                        <Table.Cell>{patient.gender}</Table.Cell>
                        <Table.Cell>
                          <Button style={{fontSize: '12px', fontFamily: "IRANSANS_Medium"}} onClick={() => patientFile(patient.id)} size="mini" icon>پرونده بیمار</Button>
                        </Table.Cell>
                    </Table.Row>
            </Table.Body>
          </>
          )})}
        </Table>
      </Segment>
    ]
}

export default Patients;