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

      const {onToggleGraph, graphVisible, viewport,
            witnesses, leftReading, rightReading, onSelectLeftReading, onSelectRightReading,
            personsVisible, onTogglePersons, placesVisible, onTogglePlaces, datesVisible, onToggleDates,
            isExpanded, setIsExpanded, manuscripts} = props;
     
   

      return (
          
                  <ExpansionPanel  style={{ marginLeft:'16px', marginBottom:'8px' ,minWith:'160px'}}
                        expanded={ isExpanded} onChange={ ()=>{ let ex = !isExpanded; setIsExpanded(ex)}}>
                        <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                        >
                              <Typography variant="h6" >
                                    {'View Options'}
                              </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{display:'flex', flexDirection:'column',alignItems:'center' }}>
                                    <FormControlLabel style={{minWidth:'180px' ,alignSelf:'flex-start'}}
                                          control={
                                                <Switch
                                                      checked={graphVisible}
                                                      onChange={onToggleGraph}
                                                />
                                          }
                                          labelPlacement='end'
                                          label="Graph"
                                    />
                       
                                    <div style={{alignSelf:'flex-start'}}>
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
                                          /><br/>
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
                                          /><br/>
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
                                          /><br/>
                                    </div>

                                    <FormControl >
                                          <InputLabel style={{fontSize:'16px', paddingLeft: 10}}>Left Text Pane</InputLabel>
                                                <Select style={{width:viewport.width * .14, fontSize: '12pt', paddingLeft: 10}}
                                                      value={leftReading}
                                                      onChange={(e,v)=>{onSelectLeftReading(e.target.value)} }
                                                >
                                                      {
                                                            witnesses.map(witness=>{
                                                                  let msDescription = manuscripts.find( m=>{return m.id === witness.sigil})
                                                                  let descText = msDescription? ` MS ${msDescription.idno} (sigil: ${witness.sigil})`:`sigil: ${witness.sigil}`
                                                                  return <MenuItem key={witness.id} value={witness.sigil}>{descText}</MenuItem>
                                                            })
                                                      }
                                                </Select>
                                    </FormControl>
                             
                                    <div style={{height:'8px'}}></div>
                             
                                    <FormControl>
                                          <InputLabel style={{fontSize:'16px', paddingLeft: 10}}>Right Text Pane </InputLabel>
                                                <Select style={{width:viewport.width * .14, marginBottom:'16px', fontSize: '12pt', paddingLeft: 10}}
                                                      value={rightReading}
                                                      onChange={(e,v)=>{onSelectRightReading(e.target.value)}}
                                                >
                                                      {
                                                             witnesses.map(witness=>{
                                                                  let msDescription = manuscripts.find( m=>{return m.id === witness.sigil})
                                                                  let sigilLabel = witness.sigil === "Translation" ? "Lemma Translation" : witness.sigil
                                                                  let descText = msDescription? ` MS ${msDescription.idno} (sigil: ${sigilLabel})`:`sigil: ${sigilLabel}`
                                                                  return <MenuItem key={witness.id} value={witness.sigil}>{descText}</MenuItem>
                                                            })
                                                      }
                                                </Select>
                                    </FormControl>
                            
                             

                        </ExpansionPanelDetails>
                  </ExpansionPanel>
 
      )

      
}
export default ViewOptions
