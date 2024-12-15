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
    fontWeight: 500, fontSize: '14px', fontFamily: "IRANSANS_Bold"
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
      <Segment style={{ fontSize: '14px', fontFamily: "IRANSANS_Bold"}}>
        <Header style={{fontSize: '15px', fontFamily: "IRANSANS_Bold"}}>ثبت اطلاعات پزشکان</Header>
        <Table compact celled style={{textAlign: 'center'}}>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell style={{borderLeft: '1px solid #E8E8E8'}}>نام و نام خانوادگی</Table.HeaderCell>
              <Table.HeaderCell>نام پدر</Table.HeaderCell>
              <Table.HeaderCell>کدملی</Table.HeaderCell>
              <Table.HeaderCell>شماره تماس</Table.HeaderCell>
              <Table.HeaderCell>عملیات</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { doctorsList.map((doctor, index) => {
                return (
                <>
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
                  </>
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
              <label>نام و نام خانوادگی</label>
              <Input
                type="text"
                name="fullName"
                value={doctor.fullName || ''}
                onChange={handleChange}
                placeholder="نام و نام خانوادگی"
              />
            </Form.Field>
            <Form.Field>
              <label>نام پدر</label>
              <Input
                type="text"
                name="convalescence"
                value={doctor.fatherName || ''}
                onChange={handleChange}
                placeholder="نام پدر"
              />
            </Form.Field>
          </Form.Group>

          <Form.Group unstackable widths={2}>
            <Form.Field>
              <label>کدملی</label>
              <Input
                type="text"
                onChange={handleChange}
                name="personalCode"
                value={doctor.personalCode || ''}
                placeholder="کدملی"
              />
            </Form.Field>
            <Form.Field>
            <label>شماره تماس</label>
            <Input
              type="text"
              onChange={handleChange}
              name="phoneNumber"
              value={doctor.phoneNumber || ''}
              placeholder="شماره تماس"
              fluid
            />
            </Form.Field>
          </Form.Group>
          <Button style={{fontSize: '12px', fontFamily: "IRANSANS_Medium"}} primary type="submit" onClick={handleSubmit}>
            ثبت
          </Button>
          <Button style={{fontSize: '12px', fontFamily: "IRANSANS_Medium"}} onClick={clearDoctorForm}>پاک کردن</Button>
        </Form>
      </Segment>
    ]
}

export default Doctors;