import React from 'react';
import { Tab, Segment, Button } from "semantic-ui-react";
import PatientsInformation from "./PatientsInformation";
import PreoperativeInformation from "./PreoperativeInformation";
import InformationDuringSurgery from "./InformationDuringSurgery";
import PostoperativeInformation from "./PostoperativeInformation";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
  }
});

const panes = [
    {
      menuItem: 'Tab1: Patient Info',
      render: () => <Tab.Pane attached={false} style={{height: '470px', overflow: 'auto'}}>
        <PatientsInformation />
      </Tab.Pane>,
    },
    {
      menuItem: 'Tab2: Preoperative Info',
      render: () => <Tab.Pane attached={false} style={{height: '470px', overflow: 'auto'}}>
        <PreoperativeInformation />
      </Tab.Pane>,
    },
    {
      menuItem: 'Tab3: Intraoperative Info',
      render: () => <Tab.Pane attached={false} style={{height: '470px', overflow: 'auto'}}>
        <InformationDuringSurgery />
      </Tab.Pane>,
    },
    {
      menuItem: 'Tab4: Post-Operative Info',
      render: () => <Tab.Pane attached={false} style={{height: '470px', overflow: 'auto'}}>
        <PostoperativeInformation />
      </Tab.Pane>,
    },
]

const handleSubmit = () => {
}

const PatientsFiles = props => {
  const classes = useStyles();

  return(
    <Segment textAlign='right' style={{width: '75%', minHeight: '600px', maxHeight: '100%', marginRight: '14px', border: '1px solid #DEDEDF', borderRadius: '10px'}}>
         <Button style={{float: 'left', marginTop: '-5px',fontSize: '14px'}} primary type="submit" onClick={handleSubmit}>Save</Button>
         <Tab style={{marginTop: '40px'}} menu={{ fluid: false, attached: false }} panes={panes} />
    </Segment>
     )
};

export default PatientsFiles;