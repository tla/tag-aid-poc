import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox';

const ViewOptions =(props)=>{

      const {onToggleGraph, graphVisible, 
            witnesses, leftReading, rightReading, onSelectLeftReading, onSelectRightReading,
            personsVisible, onTogglePersons, placesVisible, onTogglePlaces, datesVisible, onToggleDates} = props;
     

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
                        <ExpansionPanelDetails style={{display:'flex', flexDirection:'column', }}>

                              <div>
                                    <FormControlLabel
                                          control={
                                                <Switch
                                                      checked={graphVisible}
                                                      onChange={onToggleGraph}
                                                />
                                          }
                                          labelPlacement='start'
                                          label="Display Graph"
                                    />
                              </div> 
                              <div style={{height:'16px'}}></div>
                              <div>
                                    <FormControlLabel
                                          control={
                                                <Checkbox
                                                      checked={personsVisible}
                                                      onChange={onTogglePersons}
                                                      style={{color:'#22e7eea2'}}
                                                />
                                          }
                                          labelPlacement='start'
                                          label="Highlight Persons"
                                    />
                              </div> 
                              <div style={{height:'16px'}}></div>
                              <div>
                                    <FormControlLabel
                                          control={
                                                <Checkbox
                                                      checked={placesVisible}
                                                      onChange={onTogglePlaces}
                                                      style={{color:'#5D39BF'}}
                                                />
                                          }
                                          labelPlacement='start'
                                          label="Highlight Places"
                                    />
                              </div> 
                              <div style={{height:'16px'}}></div>
                              <div>
                                    <FormControlLabel
                                          control={
                                                <Checkbox
                                                      checked={datesVisible}
                                                      onChange={onToggleDates}
                                                      style={{color:'#F526C0'}}
                                                />
                                          }
                                          labelPlacement='start'
                                          label="Highlight Dates"
                                    />
                              </div> 
                              <div style={{height:'16px'}}></div>

                              <div style={{display:'flex'}}>
                                          <div style={{width:'130px',  }}>
                                                <FormControl >
                                                      <InputLabel style={{fontSize:'16px', width:'120px'}}>Left Text Pane</InputLabel>
                                                            <Select style={{width:'130px'}}
                                                                  value={leftReading}
                                                                  onChange={(e,v)=>{onSelectLeftReading(e.target.value)} }
                                                            >
                                                                  {
                                                                        witnesses.map(witness=>{
                                                                              return <MenuItem key={witness.id} value={witness.sigil}>{witness.sigil}</MenuItem>
                                                                        })
                                                                  }
                                                            </Select>
                                                </FormControl>
                                          </div>
                                          <div style={{width:'16px'}}></div>
                                          
                                          <div style={{width:'130px'}}>
                                                <FormControl >
                                                      <InputLabel style={{fontSize:'16px', width:'120px'}}>Right Text Pane </InputLabel>
                                                            <Select style={{width:'130px'}}
                                                                  value={rightReading}
                                                                  onChange={(e,v)=>{onSelectRightReading(e.target.value)}}
                                                            >
                                                                  {
                                                                        witnesses.map(witness=>{
                                                                              return <MenuItem key={witness.id} value={witness.sigil}>{witness.sigil}</MenuItem>
                                                                        })
                                                                  }
                                                            </Select>
                                                </FormControl>
                                          </div>
                              </div>

                        </ExpansionPanelDetails>
                  </ExpansionPanel>
                 

            </div>
      )

      
}
export default ViewOptions