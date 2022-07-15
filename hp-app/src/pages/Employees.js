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
    fontWeight: 500, fontSize: '14px'
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
      .then(() => {
        setEmployee({
          personModel
        });
      })
      .catch(error => console.log(error));
  } else{
      dispatch(actionCreators.addEmployee(employee))
      .then(() => {
        setEmployee({
          personModel
        });
      })
      .catch(error => console.log(error));
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
      <Segment style={{ fontSize: '14px'}}>
        <Header style={{fontSize: '15px'}}>Record Employee Information</Header>
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
            { employeeList.map((employee) => {
                return (
                <React.Fragment key={employee.id.toString()}>
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
              value={employee.fullName || ''}
              onChange={handleChange}
              placeholder="FullName"
            />
          </Form.Field>
          <Form.Field>
            <label>Father Name</label>
            <Input
              type="text"
              name="convalescence"
              value={employee.fatherName || ''}
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
              value={employee.personalCode || ''}
              placeholder="Personal Code"
            />
          </Form.Field>
          <Form.Field>
          <label>Phone Number</label>
          <Input
            type="text"
            onChange={handleChange}
            name="phoneNumber"
            value={employee.phoneNumber || ''}
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

export default Employees;