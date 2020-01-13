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

const ViewOptions =(props)=>{

      const {onToggleGraph, graphVisible, witnesses} = props;
      const [txtPane1, setTxtPane1] = useState('lemma');
      const [txtPane2, setTxtPane2] = useState('en');


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

                        <div style={{display:'flex'}}>
                                    <div style={{width:'130px',  }}>
                                          <FormControl >
                                                <InputLabel style={{fontSize:'16px', width:'120px'}}>Left Text Pane</InputLabel>
                                                      <Select style={{width:'100%'}}
                                                            value={txtPane1}
                                                            onChange={(name, value )=>{handleTextPaneChange(1, value.key)} }
                                                      >
                                                            <MenuItem key='lemma' value={'lemma'}>{'Lemma Text'}</MenuItem>
                                                            <MenuItem key='en' value={'en'}>{'Translation'}</MenuItem>
                                                            {
                                                                  witnesses.map(witness=>{
                                                                        return <MenuItem key={witness.id} value={witness.id}>{witness.sigil}</MenuItem>
                                                                  })
                                                            }
                                                      </Select>
                                          </FormControl>
                                    </div>
                                    
                                    <div style={{width:'130px'}}>
                                          <FormControl >
                                                <InputLabel style={{fontSize:'16px', width:'120px'}}>Right Text Pane </InputLabel>
                                                      <Select style={{width:'100%'}}
                                                            value={txtPane2}
                                                            onChange={(name, value )=>{handleTextPaneChange(2, value.key)} }
                                                      >
                                                            <MenuItem key='lemma' value={'lemma'}>{'Lemma Text'}</MenuItem>
                                                            <MenuItem key='en' value={'en'}>{'Translation'}</MenuItem>
                                                            {
                                                                  witnesses.map(witness=>{
                                                                        return <MenuItem key={witness.id} value={witness.id}>{witness.sigil}</MenuItem>
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

      function handleTextPaneChange(pane, value){
            if( pane === 1)
                  setTxtPane1(value);
            else
                  setTxtPane2(value)

      }
}
export default ViewOptions