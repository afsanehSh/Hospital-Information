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
import { actionCreators } from "../store/Diseases";
import { useSelector, useDispatch } from 'react-redux';
import { diseaseModel } from '../models/DiseasesModel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    fontWeight: 500, fontSize: '14px'
  }
});

const Diseases = (props) => {

  const classes = useStyles();

  const dispatch = useDispatch();
  const [disease, setDisease] = useState(diseaseModel);

  const diseasesList = useSelector(state => state.diseases.diseases);

  useEffect(()=>{
    dispatch(actionCreators.getDiseases);
    if(diseasesList){
      setDisease(diseasesList);
    }
    }, [dispatch])


  const deleteDisease = id => {
    dispatch(actionCreators.removeDisease(id))
  };

  const selectDiseaseForEditing = id => {
    console.log(id);
    let disease = diseasesList.find(v => v.id === id);
    setDisease(disease);
  };

  const handleSubmit = () => {
    if (disease.id > 0) {
    dispatch(actionCreators.editDisease(disease))
      .then(data => {
        setDisease({
          id: data.id,
          name: data.name,
          convalescence: data.convalescence,
          signs: data.signs,
          spread: data.spread,
        });
      })
  } else{
      dispatch(actionCreators.addDisease(disease))
      .then(data => {
        setDisease({
          id: data.id,
          name: data.name,
          convalescence: data.convalescence,
          signs: data.signs,
          spread: data.spread,
        });
      })
    } 
      
    clearDiseaseForm();
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setDisease({ ...disease, [name]: value });
  }

  const clearDiseaseForm = () => {
    setDisease(diseaseModel.newDisease);
  };

    return [
      <Segment style={{ fontSize: '14px'}}>
        <Header style={{fontSize: '15px'}}>Registration Types of Diseases</Header>
        <Table compact celled style={{textAlign: 'center'}}>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell className={classes.root} style={{borderLeft: '1px solid #E8E8E8' }}>Disease Name</Table.HeaderCell>
              <Table.HeaderCell className={classes.root}>Recovery Period</Table.HeaderCell>
              <Table.HeaderCell className={classes.root}>Symptoms</Table.HeaderCell>
              <Table.HeaderCell className={classes.root}>Disease Spread</Table.HeaderCell>
              <Table.HeaderCell className={classes.root}>Opt</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { diseasesList.map((disease, index) => {
                return (
                <React.Fragment key={disease.id}>
                <Table.Row>
                    <Table.Cell style={{borderLeft: '1px solid #E8E8E8'}}>{disease.name}</Table.Cell>
                    <Table.Cell>{disease.convalescence}</Table.Cell>
                    <Table.Cell>{disease.signs}</Table.Cell>
                    <Table.Cell>{disease.spread}</Table.Cell>
                    <Table.Cell>
                      <Button onClick={() => selectDiseaseForEditing(disease.id)} size="mini" icon>
                        <Icon name="pencil" />
                      </Button>
                      <Button onClick={() => deleteDisease(disease.id)} color="red" size="mini" icon>
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
              <label>Disease Name</label>
              <Input
                type="text"
                name="name"
                value={disease.name || ''}
                onChange={handleChange}
                placeholder="Disease Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Recovery Period</label>
              <Input
                type="text"
                name="convalescence"
                value={disease.convalescence || ''}
                onChange={handleChange}
                placeholder="Recovery Period"
              />
            </Form.Field>
          </Form.Group>

          <Form.Group unstackable widths={2}>
            <Form.Field>
              <label>Symptoms</label>
              <Input
                type="text"
                onChange={handleChange}
                name="signs"
                value={disease.signs || ''}
                placeholder="Symptoms"
              />
            </Form.Field>
            <Form.Field>
            <label>Disease Spread</label>
            <Input
              type="text"
              onChange={handleChange}
              name="spread"
              value={disease.spread || ''}
              placeholder="Disease Spread"
              fluid
            />
            </Form.Field>
          </Form.Group>
          <Button style={{fontSize: '12px'}} primary type="submit" onClick={handleSubmit}>
            Confirm
          </Button>
          <Button style={{fontSize: '12px'}} onClick={clearDiseaseForm}>Clean</Button>
        </Form>
      </Segment>
    ]
}

export default Diseases;