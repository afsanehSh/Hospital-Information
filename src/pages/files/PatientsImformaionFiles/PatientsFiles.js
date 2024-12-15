import React from 'react';
import { Tab, Segment, Button } from "semantic-ui-react";
import PatientsInformation from "./PatientsInformation";
import PreoperativeInformation from "./PreoperativeInformation";
import InformationDuringSurgery from "./InformationDuringSurgery";
import PostoperativeInformation from "./PostoperativeInformation";
import { makeStyles } from '@mui/styles';
import {useLocation, useParams} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    fontFamily: "IRANSANS_Bold"
  }
});

const panes = [
    {
      menuItem: 'تب 1: اطلاعات بیمار',
      render: () => <Tab.Pane attached={false} style={{height: '470px', overflow: 'auto'}}>
        <PatientsInformation />
      </Tab.Pane>,
    },
    {
      menuItem: 'تب 2: اطلاعات قبل از عمل',
      render: () => <Tab.Pane attached={false} style={{height: '470px', overflow: 'auto'}}>
        <PreoperativeInformation />
      </Tab.Pane>,
    },
    {
      menuItem: 'تب 3: اطلاعات حین عمل',
      render: () => <Tab.Pane attached={false} style={{height: '470px', overflow: 'auto'}}>
        <InformationDuringSurgery />
      </Tab.Pane>,
    },
    {
      menuItem: 'تب 4: اطلاعات بعد از عمل',
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
         <Button style={{float: 'left', marginTop: '-5px',fontSize: '14px', fontFamily: "IRANSANS_Bold"}} primary type="submit" onClick={handleSubmit}>ذخیره</Button>
         <Tab style={{marginTop: '40px'}} menu={{ fluid: false, attached: false }} panes={panes} />
    </Segment>
     )
};

export default PatientsFiles;