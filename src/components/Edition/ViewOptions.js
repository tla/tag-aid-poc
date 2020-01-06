import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ViewOptions =(props)=>{

      const {onToggleGraph, graphVisible} = props

      return (
            <div>
                  <ExpansionPanel>
                        <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                        >
                              <Typography variant="h6" >
                                    {'View Options'}
                              </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <div>
                              <FormControlLabel
                                    control={
                                          <Switch
                                                checked={graphVisible}
                                                onChange={onToggleGraph}
                                          />
                                    }
                                    label="Display Graph"
                              />
                        </div>
                        </ExpansionPanelDetails>
                  </ExpansionPanel>
                 

            </div>
      )
}
export default ViewOptions