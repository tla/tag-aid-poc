import React , { Fragment} from 'react';
import Header from '../Header';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'

const ManuscriptPage = (props) => {


      return (
            <Fragment>
            <Header />
            <div class="container content">
                 
                  <div className="row">
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/Bz430/Bz430.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Bzommar monastery, MS 430</h5>
                                          <p className="card-text">Copied in 1323 at the Monastery of St. Tʿoros. Includes only the Prophecies of Kozeṙn.</p>
                                          <a href="images/mss/Bz430/Bz430.tei.xml" download="Bzommar_430.tei.xml" className="btn btn-primary">Download transcription</a>
                                                <Button size="large" component={Link} to="/ManuscriptView/Bz430" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                                </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/Bz449/Bz449.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Bzommar monastery, MS 449</h5>
                                          <p className="card-text">Manuscript K. Copied in 1699, place unknown.</p>
                                          <a href="images/mss/Bz449/Bz449.tei.xml" download="Bzommar_430.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/Bz449" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/Bz644/Bz644.png" width="250" height="250" className="card-img-top" alt="Manuscript XX" />
                                    <div className="card-body">
                                          <h5 className="card-title">Bzommar monastery, MS 644</h5>
                                          <p className="card-text">Copied in Livorno between 1775 and 1805.</p>
                                          <a href="images/mss/Bz644/Bz644.tei.xml" download="Bzommar_644.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/Bz644" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/L5260/L5260.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">London, British Library, Oriental MS 5260</h5>
                                          <p className="card-text">Manuscript L. Copied around 1660, probably at Sanahin.</p>
                                          <a href="images/mss/L5260/L5260.tei.xml" download="London_BL_OR5260.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/L5260" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M1731/M1731.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 1731</h5>
                                          <p className="card-text">Manuscript F. Copied in Lviv in 1617.</p>
                                          <a href="images/mss/M1731/M1731.tei.xml" download="Matenadaran_1731.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M1731" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M1767/M1767.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 1767</h5>
                                          <p className="card-text">Manuscript B. Copied in 1623 in Aleppo.</p>
                                          <a href="images/mss/M1767/M1767.tei.xml" download="Matenadaran_1767.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M1767" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M1768/M1768.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 1768</h5>
                                          <p className="card-text">Manuscript H. Copied sometime before 1661, place unknown.</p>
                                          <a href="images/mss/M1768/M1768.tei.xml" download="Matenadaran_1768.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M1768" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M1769/M1769.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 1769</h5>
                                          <p className="card-text">Manuscript I. Copied in 1664 in Tiflis.</p>
                                          <a href="images/mss/M1769/M1769.tei.xml" download="Matenadaran_1769.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M1769" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M1775/M1775.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 1775</h5>
                                          <p className="card-text">Copied in 1671, place unknown. Contains extracts from Book 1.</p>
                                          <a href="images/mss/M1775/M1775.tei.xml" download="Matenadaran_1775.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M1775" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M1896/M1896.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 1896</h5>
                                          <p className="card-text">Manuscript A. Copied in 1689 at the Amrdolu monastery of Bitlis.</p>
                                          <a href="images/mss/M1896/M1896.tei.xml" download="Matenadaran_1896.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M1896" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M2644/M2644.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 2644</h5>
                                          <p className="card-text">Manuscript G. Copied between 1850–57 in Constantinople.</p>
                                          <a href="images/mss/M2644/M2644.tei.xml" download="Matenadaran_2644.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M2644" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M2855/M2855.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 2855</h5>
                                          <p className="card-text">Presumed 17th century, place of copying unknown.</p>
                                          <a href="images/mss/M2855/M2855.tei.xml" download="Matenadaran_2855.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M2855" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M2899/M2899.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 2899</h5>
                                          <p className="card-text">Presumed 19th century, place of copying unknown.</p>
                                          <a href="images/mss/M2899/M2899.tei.xml" download="Matenadaran_2899.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M2899" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M3071/M3071.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 3071</h5>
                                          <p className="card-text">Manuscript C. Copied between 1651–61 at Yovhannovankʿ.</p>
                                          <a href="images/mss/M3071/M3071.tei.xml" download="Matenadaran_3071.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M3071" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M3380/M3380.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 3380</h5>
                                          <p className="card-text">Presumed 18th century, place of copying unknown.</p>
                                          <a href="images/mss/M3380/M3380.tei.xml" download="Matenadaran_3380.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M3380" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M3519/M3519.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 3519</h5>
                                          <p className="card-text">Manuscript D. Copied in 1647 at Târgu Mureș.</p>
                                          <a href="images/mss/M3519/M3519.tei.xml" download="Matenadaran_3519.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M3519" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M3520/M3520.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 3520</h5>
                                          <p className="card-text">Manuscript E. Copied sometime between 1601–21 century at Tufang</p>
                                          <a href="images/mss/M3520/M3520.tei.xml" download="Matenadaran_3520.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M3520" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M5587/M5587.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 5587</h5>
                                          <p className="card-text">Manuscript J. Copied in 1617 in Lviv.</p>
                                          <a href="images/mss/M5587/M5587.tei.xml" download="Matenadaran_5587.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M5587" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M6605/M6605.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 6605</h5>
                                          <p className="card-text">Copied in 1849 in Moscow.</p>
                                          <a href="images/mss/M6605/M6605.tei.xml" download="Matenadaran_6605.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M6605" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M6686/M6686.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Yerevan, Matenadaran, MS 6686</h5>
                                          <p className="card-text">Copied in 1582, place unknown. Includes only the episode concerning Gagik Bagratuni's confession of faith.</p>
                                          <a href="images/mss/M6686/M6686.tei.xml" download="Matenadaran_6686.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M6686" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/M8232/M8232.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Copied in 1709 at Armavir.</h5>
                                          <p className="card-text">A brief description</p>
                                          <a href="images/mss/M8232/M8232.tei.xml" download="Matenadaran_8232.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/M8232" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/Ox-e.32/Ox-e.32.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Oxford, Bodleian Library, MS Arm e.32</h5>
                                          <p className="card-text">Manuscript O. Presumed 18th century, probably copied at Varag monastery.</p>
                                          <a href="images/mss/Ox-e.32/Ox-e.32.tei.xml"
                                                download="Oxford_Bodleian_Arm_e32.tei.xml"
                                                className="btn btn-primary">Download transcription</a>
                                             <Button size="large" component={Link} to="/ManuscriptView/Ox-e.32" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/V913/V913.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Venice, Mekhitarist Library, MS 887</h5>
                                          <p className="card-text">Manuscript V. Copied between 1590–1600, probably at Aleppo.</p>
                                          <a href="images/mss/V913/V913.tei.xml" download="Venice_887.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/V913" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/V901/V901.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Venice, Mekhitarist Library, MS 901</h5>
                                          <p className="card-text">Manuscript X. Copied in 1669 in Isfahan.</p>
                                          <a href="images/mss/V901/V901.tei.xml" download="Venice_901.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/V901" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/V913/V913.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Venice, Mekhitarist Library, MS 913</h5>
                                          <p className="card-text">Manuscript Y. Presumed 17th century, place of copying unknown.</p>
                                          <a href="images/mss/V913/V913.tei.xml" download="Venice_913.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/V913" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/V917/V917.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Venice, Mekhitarist Library, MS 917</h5>
                                          <p className="card-text">Manuscript Z. Presumed 17th century, place of copying unknown.</p>
                                          <a href="images/mss/V917/V917.tei.xml" download="Venice_917.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/V917" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/W243/W243.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Vienna, Mekhitarist Library, MS 243</h5>
                                          <p className="card-text">Presumed 18th or 19th century, place of copying unknown.</p>
                                          <a href="images/mss/W243/W243.tei.xml" download="Venice_887.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/W243" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/W246/W246.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Vienna, Mekhitarist Library, MS 246</h5>
                                          <p className="card-text">Presumed 19th century, place of copying unknown.</p>
                                          <a href="images/mss/W246/W246.tei.xml" download="Venice_887.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/W246" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/W574/W574.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Vienna, Mekhitarist Library, MS 574</h5>
                                          <p className="card-text">Manuscript W. Copied in 1601 in Constantinople.</p>
                                          <a href="images/mss/W574/W574.tei.xml" download="Venice_887.tei.xml" className="btn btn-primary">Download transcription</a>
                                          <Button size="large" component={Link} to="/ManuscriptView/W574" color="secondary">
                                                      <Typography variant="body2">
                                                            {"view transcription"}
                                                      </Typography>
                                          </Button>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/P191/P191.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Paris, Bibliothèque nationale, MS arm. 191</h5>
                                          <p className="card-text">Manuscript P. Copied between 1642–47, probably in Constantinople.</p>
                                          <a href="manuscripts.html#" className="btn btn-primary disabled">Transcription pending</a>
                                         
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="images/mss/P200/P200.png" width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Paris, Bibliothèque nationale, MS arm. 200</h5>
                                          <p className="card-text">Manuscript Q. Copied in 1728 in Constantinople.</p>
                                          <a href="manuscripts.html#" className="btn btn-primary disabled">Transcription pending</a>
                                         
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="card">
                                    <img src="https://editions.byzantini.st/ChronicleME/..." width="250" height="250" className="card-img-top" alt="Manuscript thumbnail" />
                                    <div className="card-body">
                                          <h5 className="card-title">Rome, Armenian hospice, MS 25</h5>
                                          <p className="card-text">Manuscript R. Presumed 17th century, place of copying unknown.</p>
                                          <a href="manuscripts.html#" className="btn btn-primary disabled">Manuscript unavailable</a>
                                          
                                    </div>
                              </div>
                        </div>
                  </div>


                  <div className="row footer">
                        <div className="col-md-auto">
                              <img src="images/by-sa.png" width="100" alt="CC-BY-SA" />
                        </div>
                        <div className="col-md-auto">
                              <p>Created with the generous support of:</p>
                        </div>
                        <div className="col-md-auto">
                              <img src="images/SNF_RGB_E_POS.png" height="50px" />
                              <img src="images/univie_logo.jpg" height="50px" />
                        </div>
                  </div>


            </div>
            </Fragment>
      )



}
export default ManuscriptPage