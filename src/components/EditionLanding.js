import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Header from './Header'
import Paper from '@material-ui/core/Paper';


const EditionLanding = ( props)=>{

      const cardStyle={
            width:'210px',
            height:'210px',
      }

      const {onSearch} = props;

      return (
            <Grid container >
                  <Grid item>
                        <Header onSearch={onSearch} />
                  </Grid>
                  <Grid item xs={12}>
                
                              <Grid container alignItems="center" direction="column">

                                          <Grid item xs={12}>
                                                <Typography variant="h4" style={{textAlign:'center',margin:'50px 0px 30px 0px', fontWeight:'900'}}>
                                                      {"Critical Edition"}
                                                </Typography>
                                          </Grid>
                                          <Grid item xs={12}>
                                               
                                                      <Typography variant="body1" style={{textAlign:'left', fontWeight:'bold', fontStyle:'italic'}}>
                                                                  {"Landing page for all sections of the Edition."}
                                                      </Typography>
                                                      <Typography variant="body1" style={{textAlign:'left', fontWeight:'bold',fontStyle:'italic'}}>
                                                                  {"This is a short abstract of what goes on the page 100 characters max"}
                                                      </Typography>
                                                
                                          </Grid>
                                          <Grid item xs={12} md={8} >
                                               
                                                <Typography variant="body2" style={{textAlign:'justify', padding:"0px 12px", marginTop:'16px',marginBottom:'30px'}}>
                                                      μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος
                                                      οὐλομένην, ἣ μυρί᾽ Ἀχαιοῖς ἄλγε᾽ ἔθηκε,
                                                      πολλὰς δ᾽ ἰφθίμους ψυχὰς Ἄϊδι προΐαψεν
                                                      ἡρώων, αὐτοὺς δὲ ἑλώρια τεῦχε κύνεσσιν
                                                      5οἰωνοῖσί τε πᾶσι, Διὸς δ᾽ ἐτελείετο βουλή,
                                                      ἐξ οὗ δὴ τὰ πρῶτα διαστήτην ἐρίσαντε
                                                      Ἀτρεΐδης τε ἄναξ ἀνδρῶν καὶ δῖος Ἀχιλλεύς.
                                                      τίς τ᾽ ἄρ σφωε θεῶν ἔριδι ξυνέηκε μάχεσθαι;
                                                      Λητοῦς καὶ Διὸς υἱός: ὃ γὰρ βασιλῆϊ χολωθεὶς
                                                      10νοῦσον ἀνὰ στρατὸν ὄρσε κακήν, ὀλέκοντο δὲ λαοί,
                                                      οὕνεκα τὸν Χρύσην ἠτίμασεν ἀρητῆρα
                                                      Ἀτρεΐδης: ὃ γὰρ ἦλθε θοὰς ἐπὶ νῆας Ἀχαιῶν
                                                      λυσόμενός τε θύγατρα φέρων τ᾽ ἀπερείσι᾽ ἄποινα,
                                                      στέμματ᾽ ἔχων ἐν χερσὶν ἑκηβόλου Ἀπόλλωνος
                                                      15χρυσέῳ ἀνὰ σκήπτρῳ, καὶ λίσσετο πάντας Ἀχαιούς,
                                                      Ἀτρεΐδα δὲ μάλιστα δύω, κοσμήτορε λαῶν:
                                                      Ἀτρεΐδαι τε καὶ ἄλλοι ἐϋκνήμιδες Ἀχαιοί,
                                                      ὑμῖν μὲν θεοὶ δοῖεν Ὀλύμπια δώματ᾽ ἔχοντες
                                                      ἐκπέρσαι Πριάμοιο πόλιν, εὖ δ᾽ οἴκαδ᾽ ἱκέσθαι:
                                                      20παῖδα δ᾽ ἐμοὶ λύσαιτε φίλην, τὰ δ᾽ ἄποινα δέχεσθαι,
                                                      ἁζόμενοι Διὸς υἱὸν ἑκηβόλον Ἀπόλλωνα.
                                                      ἔνθ᾽ ἄλλοι μὲν πάντες ἐπευφήμησαν Ἀχαιοὶ
                                                </Typography>
                                                <Typography variant="body2" style={{float:'right', margin:"6px"}}>
                                                     Download the Armenian text as JSON or TEI
                                                </Typography>
                                          </Grid>
                                        
                                        
                            
                                                  
                                      
                                          <Grid item xs={12}>
                                                <Grid container  justify="center" alignItems="center">
                                                      
                                                            <Grid item xs={12} sm={6} md={3}>
                                                                  <div style={{display:'flex',justifyContent:'center',margin:'6px'}}>
                                                                        <Card style={cardStyle} variant="outlined">
                                                                              <CardActions>
                                                                                    <Button size="large" component={Link} to="/Edition/1019321" color="secondary">
                                                                                                      <Typography variant="body2">
                                                                                                            {"Prologue"}
                                                                                                      </Typography>
                                                                                    </Button>
                                                                              </CardActions>
                                                                        </Card>
                                                                  </div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={6} md={3}>
                                                            <div style={{display:'flex',justifyContent:'center',margin:'6px'}}>
                                                                        <Card style={cardStyle} variant="outlined">
                                                                              <CardActions>
                                                                                    <Button size="large" component={Link} to="/Edition/1019321" color="secondary">
                                                                                                      <Typography variant="body2">
                                                                                                            {"Section 1"}
                                                                                                      </Typography>
                                                                                    </Button>
                                                                              </CardActions>
                                                                        </Card>
                                                                  </div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={6} md={3}>
                                                            <div style={{display:'flex',justifyContent:'center',margin:'6px'}}>
                                                                        <Card style={cardStyle} variant="outlined">
                                                                              <CardActions>
                                                                                    <Button size="large" component={Link} to="/Edition/1019321" color="secondary">
                                                                                                      <Typography variant="body2">
                                                                                                            {"Section 2"}
                                                                                                      </Typography>
                                                                                    </Button>
                                                                              </CardActions>
                                                                        </Card>
                                                                  </div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={6} md={3}>
                                                            <div style={{display:'flex',justifyContent:'center',margin:'6px'}}>
                                                                        <Card style={cardStyle} variant="outlined">
                                                                              <CardActions>
                                                                                    <Button size="large" component={Link} to="/Edition/1019321" color="secondary">
                                                                                                      <Typography variant="body2">
                                                                                                            {"Section 3"}
                                                                                                      </Typography>
                                                                                    </Button>
                                                                              </CardActions>
                                                                        </Card>
                                                                  </div>
                                                            </Grid>
                                                </Grid>
                                          </Grid>
                                    
                              </Grid>
                             
                  </Grid>
                  <Grid item xs={12}>
                        <Paper style={{margin:'12px 16px 24px 16px', height:'140px',padding:'16px'}} >
                              <Typography variant="body1">{"footer..."}</Typography>
                        </Paper>
                  </Grid>
            </Grid>
      )


}

export default EditionLanding