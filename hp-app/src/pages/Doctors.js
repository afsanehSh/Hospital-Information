import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  Message,
  Segment,
  Table
} from "semantic-ui-react";
import { actionCreators } from "../store/Doctors";
import { useSelector, useDispatch } from 'react-redux';
import { personModel } from '../models/personModel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    fontWeight: 500, fontSize: '14px'
  }
});

const Doctors = (props) => {

  const classes = useStyles();

  const dispatch = useDispatch();
  const [doctor, setDoctor] = useState(personModel);

  const doctorsList = useSelector(state => state.doctors.doctors);

  useEffect(()=>{
    dispatch(actionCreators.getDoctors);
    if(doctorsList){
        setDoctor(doctorsList);
    }
    }, [dispatch])


  const deleteDoctors = id => {
    dispatch(actionCreators.removeDoctor(id))
  };

  const selectDoctorForEditing = id => {
    console.log(id);
    let doctor = doctorsList.find(v => v.id === id);
    setDoctor(doctor);
  };

  const handleSubmit = () => {
    if (doctor.id > 0) {
    dispatch(actionCreators.editDoctor(doctor))
      .then(data => {
        setDoctor({
            id: 0,
            fullName: "",
            fatherName: "",
            personalCode: "",
            birthDate: "",
            birthPlace: "",
            addressPlace: "",
            phoneNumber: 0,
            age: 0,
        });
      })
  } else{
      dispatch(actionCreators.addDoctor(doctor))
      .then(data => {
        setDoctor({
            id: 0,
            fullName: "",
            fatherName: "",
            personalCode: "",
            birthDate: "",
            birthPlace: "",
            addressPlace: "",
            phoneNumber: 0,
            age: 0,
        });
      })
    } 
      
    clearDoctorForm();
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setDoctor({ ...doctor, [name]: value });
  }

  const clearDoctorForm = () => {
    setDoctor(personModel.newPerson);
  };

    return [
      <Segment style={{ fontSize: '14px'}}>
        <Header style={{fontSize: '15px'}}>Registration Doctors Information</Header>
        <Table compact celled style={{textAlign: 'center'}}>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell style={{borderLeft: '1px solid #E8E8E8'}}>FullName</Table.HeaderCell>
              <Table.HeaderCell>Father Name</Table.HeaderCell>
              <Table.HeaderCell>Personal Code</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
              <Table.HeaderCell>opt</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { doctorsList.map((doctor) => {
                return (
                <React.Fragment key={doctor.id}>
                <Table.Row>
                <Table.Cell style={{borderLeft: '1px solid #E8E8E8'}}>{doctor.fullName}</Table.Cell>
                        <Table.Cell>{doctor.fatherName}</Table.Cell>
                        <Table.Cell>{doctor.personalCode}</Table.Cell>
                        <Table.Cell>{doctor.phoneNumber}</Table.Cell>
                        <Table.Cell>
                      <Button  onClick={() => selectDoctorForEditing(doctor.id)} size="mini" icon>
                        <Icon name="pencil" />
                      </Button>
                      <Button onClick={() => deleteDoctors(doctor.id)} color="red" size="mini" icon>
                        <Icon name="delete" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  </React.Fragment>
              )
            })}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan={5} />
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>,
      <Segment>
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Field>
              <label>FullName</label>
              <Input
                type="text"
                name="fullName"
                value={doctor.fullName || ''}
                onChange={handleChange}
                placeholder="FullName"
              />
            </Form.Field>
            <Form.Field>
              <label>Father Name</label>
              <Input
                type="text"
                name="convalescence"
                value={doctor.fatherName || ''}
                onChange={handleChange}
                placeholder="Father Name"
              />
            </Form.Field>
          </Form.Group>

          <Form.Group unstackable widths={2}>
            <Form.Field>
              <label>Personal Code</label>
              <Input
                type="text"
                onChange={handleChange}
                name="personalCode"
                value={doctor.personalCode || ''}
                placeholder="Personal Code"
              />
            </Form.Field>
            <Form.Field>
            <label>Phone Number</label>
            <Input
              type="text"
              onChange={handleChange}
              name="phoneNumber"
              value={doctor.phoneNumber || ''}
              placeholder="Phone Number"
              fluid
            />
            </Form.Field>
          </Form.Group>
          <Button style={{fontSize: '12px'}} primary type="submit" onClick={handleSubmit}>
            Confirm
          </Button>
          <Button style={{fontSize: '12px'}} onClick={clearDoctorForm}>clean</Button>
        </Form>
      </Segment>
    ]
}

export default Doctors;