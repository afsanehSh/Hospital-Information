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
import { actionCreators } from "../store/Deseases";
import { useSelector, useDispatch } from 'react-redux';
import { deseaseModel } from '../models/DeseasesModel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    fontWeight: 500, fontSize: '14px', fontFamily: "IRANSANS_Bold"
  }
});

const Deseases = (props) => {

  const classes = useStyles();

  const dispatch = useDispatch();
  const [desease, setDesease] = useState(deseaseModel);

  const deseasesList = useSelector(state => state.deseases.deseases);

  useEffect(()=>{
    dispatch(actionCreators.getDeseases);
    if(deseasesList){
      setDesease(deseasesList);
    }
    }, [dispatch])


  const deleteDesease = id => {
    dispatch(actionCreators.removeDesease(id))
  };

  const selectDeseaseForEditing = id => {
    console.log(id);
    let desease = deseasesList.find(v => v.id === id);
    setDesease(desease);
  };

  const handleSubmit = () => {
    if (desease.id > 0) {
    dispatch(actionCreators.editDesease(desease))
      .then(data => {
        setDesease({
          id: data.id,
          name: data.name,
          convalescence: data.convalescence,
          signs: data.signs,
          spread: data.spread,
        });
      })
  } else{
      dispatch(actionCreators.addDesease(desease))
      .then(data => {
        setDesease({
          id: data.id,
          name: data.name,
          convalescence: data.convalescence,
          signs: data.signs,
          spread: data.spread,
        });
      })
    } 
      
    clearDeseaseForm();
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setDesease({ ...desease, [name]: value });
  }

  const clearDeseaseForm = () => {
    setDesease(deseaseModel.newDesease);
  };

    return [
      <Segment style={{ fontSize: '14px', fontFamily: "IRANSANS_Bold"}}>
        <Header style={{fontSize: '15px', fontFamily: "IRANSANS_Bold"}}>ثبت انواع بیماری ها</Header>
        <Table compact celled style={{textAlign: 'center'}}>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell className={classes.root} style={{borderLeft: '1px solid #E8E8E8' }}>نام بیماری</Table.HeaderCell>
              <Table.HeaderCell className={classes.root}>دوره نقاهت</Table.HeaderCell>
              <Table.HeaderCell className={classes.root}>علائم بیماری</Table.HeaderCell>
              <Table.HeaderCell className={classes.root}>نحوه انتقال</Table.HeaderCell>
              <Table.HeaderCell className={classes.root}>عملیات</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { deseasesList.map((desease, index) => {
                return (
                <>
                <Table.Row>
                    <Table.Cell style={{borderLeft: '1px solid #E8E8E8'}}>{desease.name}</Table.Cell>
                    <Table.Cell>{desease.convalescence}</Table.Cell>
                    <Table.Cell>{desease.signs}</Table.Cell>
                    <Table.Cell>{desease.spread}</Table.Cell>
                    <Table.Cell>
                      <Button onClick={() => selectDeseaseForEditing(desease.id)} size="mini" icon>
                        <Icon name="pencil" />
                      </Button>
                      <Button onClick={() => deleteDesease(desease.id)} color="red" size="mini" icon>
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
              <label>نام بیماری</label>
              <Input
                type="text"
                name="name"
                value={desease.name || ''}
                onChange={handleChange}
                placeholder="نام بیماری"
              />
            </Form.Field>
            <Form.Field>
              <label>دوره نقاهت</label>
              <Input
                type="text"
                name="convalescence"
                value={desease.convalescence || ''}
                onChange={handleChange}
                placeholder="دوره نقاهت"
              />
            </Form.Field>
          </Form.Group>

          <Form.Group unstackable widths={2}>
            <Form.Field>
              <label>علائم</label>
              <Input
                type="text"
                onChange={handleChange}
                name="signs"
                value={desease.signs || ''}
                placeholder="علائم"
              />
            </Form.Field>
            <Form.Field>
            <label>نحوه انتقال</label>
            <Input
              type="text"
              onChange={handleChange}
              name="spread"
              value={desease.spread || ''}
              placeholder="نحوه انتقال"
              fluid
            />
            </Form.Field>
          </Form.Group>
          <Button style={{fontSize: '12px', fontFamily: "IRANSANS_Medium"}} primary type="submit" onClick={handleSubmit}>
            ثبت
          </Button>
          <Button style={{fontSize: '12px', fontFamily: "IRANSANS_Medium"}} onClick={clearDeseaseForm}>پاک کردن</Button>
        </Form>
      </Segment>
    ]
}

export default Deseases;