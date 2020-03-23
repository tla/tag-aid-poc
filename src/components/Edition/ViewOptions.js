import React from 'react';
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

      const {onToggleGraph, graphVisible, height, viewport,
            witnesses, leftReading, rightReading, onSelectLeftReading, onSelectRightReading,
            personsVisible, onTogglePersons, placesVisible, onTogglePlaces, datesVisible, onToggleDates,
      isExpanded, setIsExpanded} = props;
     
   

      return (
          
                  <ExpansionPanel  style={{marginTop:'8px', marginLeft:'8px', height:height}}
                        expanded={ isExpanded} onChange={ ()=>{ let ex = !isExpanded; setIsExpanded(ex)}}>
                        <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                        >
                              <Typography variant="h5" style={{overflow:'hidden'}}>
                                    {'View Options'}
                              </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{display:'flex', flexDirection:'column',padding:'8px 8px 0px 16px' }}>

                              <div>
                                    <FormControlLabel
                                          control={
                                                <Switch
                                                      checked={graphVisible}
                                                      onChange={onToggleGraph}
                                                />
                                          }
                                          labelPlacement='end'
                                          label="Display Graph"
                                    />
                              </div> 

                              <div style={{height:'16px'}}></div>

                              <div>
                                    <Typography varinat="h5">
                                          {'Highlights'}
                                    </Typography>
                                    <div style={{paddingLeft:'16px',display:'flex', flexDirection:'column'}}>
                                    <FormControlLabel
                                          control={
                                                <Checkbox
                                                      checked={personsVisible}
                                                      onChange={onTogglePersons}
                                                      style={{color:'#D1F3FA'}}
                                                />
                                          }
                                          labelPlacement='end'
                                          label="Persons"
                                    />
                                    <FormControlLabel
                                          control={
                                                <Checkbox
                                                      checked={placesVisible}
                                                      onChange={onTogglePlaces}
                                                      style={{color:'#F3E3FB'}}
                                                />
                                          }
                                          labelPlacement='end'
                                          label="Places"
                                    />
                            
                                    <FormControlLabel
                                          control={
                                                <Checkbox
                                                      checked={datesVisible}
                                                      onChange={onToggleDates}
                                                      style={{color:'#FAD3C3'}}
                                                />
                                          }
                                          labelPlacement='end'
                                          label="Dates"
                                    />
                                    </div>
                              </div> 
                              <div style={{height:'16px'}}></div>

                              
                              <div style={{width:'200px',  }}>
                                    <FormControl >
                                          <InputLabel style={{fontSize:'16px', }}>Left Text Pane</InputLabel>
                                                <Select style={{width:viewport.width * .12}}
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
                              <div style={{height:'8px'}}></div>
                              <div >
                                    <FormControl style={{width:'200px'  }}>
                                          <InputLabel style={{fontSize:'16px', }}>Right Text Pane </InputLabel>
                                                <Select style={{width:viewport.width * .12,marginBottom:'16px'}}
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
                             

                        </ExpansionPanelDetails>
                  </ExpansionPanel>
 
      )

      
}
export default ViewOptions