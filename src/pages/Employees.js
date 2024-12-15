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
import { actionCreators } from "../store/Employees";
import { useSelector, useDispatch } from 'react-redux';
import { personModel } from '../models/personModel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    fontWeight: 500, fontSize: '14px', fontFamily: "IRANSANS_Bold"
  }
});

const Employees = (props) => {

  const classes = useStyles();

  const dispatch = useDispatch();
  const [employee, setEmployee] = useState(personModel);

  const employeeList = useSelector(state => state.doctors.doctors);

  useEffect(()=>{
    dispatch(actionCreators.getEmployees);
    if(employeeList){
        setEmployee(employeeList);
    }
    }, [dispatch])


  const deleteEmployees = id => {
    dispatch(actionCreators.removeEmployee(id))
  };

  const selectEmployeeForEditing = id => {
    console.log(id);
    let doctor = employeeList.find(v => v.id === id);
    setEmployee(doctor);
  };

  const handleSubmit = () => {
    if (employee.id > 0) {
    dispatch(actionCreators.editEmployee(employee))
      .then(data => {
        setEmployee({
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
      dispatch(actionCreators.addEmployee(employee))
      .then(data => {
        setEmployee({
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
    setEmployee({ ...employee, [name]: value });
  }

  const clearDoctorForm = () => {
    setEmployee(personModel.newPerson);
  };

    return [
      <Segment style={{ fontSize: '14px', fontFamily: "IRANSANS_Bold"}}>
        <Header style={{fontSize: '15px', fontFamily: "IRANSANS_Bold"}}>ثبت اطلاعات کارمندان</Header>
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
            { employeeList.map((employee, index) => {
                return (
                <>
                <Table.Row>
                <Table.Cell style={{borderLeft: '1px solid #E8E8E8'}}>{employee.fullName}</Table.Cell>
                        <Table.Cell>{employee.fatherName}</Table.Cell>
                        <Table.Cell>{employee.personalCode}</Table.Cell>
                        <Table.Cell>{employee.phoneNumber}</Table.Cell>
                        <Table.Cell>
                      <Button  onClick={() => selectEmployeeForEditing(employee.id)} size="mini" icon>
                        <Icon name="pencil" />
                      </Button>
                      <Button onClick={() => deleteEmployees(employee.id)} color="red" size="mini" icon>
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
              value={employee.fullName || ''}
              onChange={handleChange}
              placeholder="نام و نام خانوادگی"
            />
          </Form.Field>
          <Form.Field>
            <label>نام پدر</label>
            <Input
              type="text"
              name="convalescence"
              value={employee.fatherName || ''}
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
              value={employee.personalCode || ''}
              placeholder="کدملی"
            />
          </Form.Field>
          <Form.Field>
          <label>شماره تماس</label>
          <Input
            type="text"
            onChange={handleChange}
            name="phoneNumber"
            value={employee.phoneNumber || ''}
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

export default Employees;