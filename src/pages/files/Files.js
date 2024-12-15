import React from 'react';
import {Segment, Tab} from "semantic-ui-react";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Link, Outlet, useNavigate } from "react-router-dom";
import {useLocation, useParams} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #ededed 30%, #f4f6f7 70%)',
    borderRadius: 3,
    color: 'black',
  }
});


const Files = props => {

  const classes = useStyles();

  const location = useLocation();
    let navigate = useNavigate(); 
    
    const routeChange = () =>{ 
      if(location.state.patientId){
        let path = `${location.state.patientId}`;
        navigate(path);
      }
    }

    return(
        <Segment.Group>
          <Segment style={{border: '1px solid #e8e8e8', borderRadius: '10px', margin: '10px'}}>
          <h3 style={{textAlign: 'center', fontWeight: 'bold'}}>مشخصات بیمار</h3>
          </Segment>
          <div>
            <Segment floated='left' style={{marginLeft: '11px', width: '18%', borderRadius: '10px'}}>
              <TreeView
              aria-label="file system navigator"
              defaultExpanded={['1', '5']}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: '573px', flexGrow: 1, maxWidth: 400, overflowY: 'auto', margin: '-12px', paddingTop: '5px'}}
              className={classes.root}>
                <TreeItem nodeId="1" sx={{padding: '3px'}} label={<Typography variant="body3" fontSize="16" fontFamily="IRANSANS_Bold">پرونده 1</Typography>}>
                  <TreeItem nodeId="2" sx={{padding: '2px'}} label={<Typography variant="body2" fontSize="16" fontFamily="IRANSANS_Medium">مراجعه اول</Typography>} onClick={routeChange} style={{fontSize: '10px'}} />
                  <TreeItem nodeId="3" sx={{padding: '2px'}} label={<Typography variant="body2" fontSize="16" fontFamily="IRANSANS_Medium">مراجعه دوم</Typography>} className={classes.treeItem} />
                  <TreeItem nodeId="4" sx={{padding: '2px'}}label={<Typography variant="body2" fontSize="16" fontFamily="IRANSANS_Medium">مراجعه سوم</Typography>} />
                </TreeItem>
                <TreeItem nodeId="5" sx={{padding: '3px'}} label={<Typography variant="body3" fontSize="16" fontFamily="IRANSANS_Bold">پرونده 2</Typography>}>
                  <TreeItem nodeId="10" sx={{padding: '2px'}} label={<Typography variant="body2" fontSize="16" fontFamily="IRANSANS_Medium">مراجعه اول</Typography>} />
                </TreeItem>
              </TreeView>
            </Segment>
          </div>
      <Outlet />
    </Segment.Group>
    )
};

export default Files;
