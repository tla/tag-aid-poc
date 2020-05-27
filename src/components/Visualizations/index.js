import React from 'react';
import Header from '../Header';
import Map from './Map';
import Timeline from './Timeline'
import { Link } from "react-router-dom";

import { Container, Card, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core';

  const Visualizations = (props) => {

    const { onSearch } = props;

    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 40
    };

    const cardStyle = {
      width: '48%'
    };

    const titleStyle = {
      color: 'darkred',
      textDecoration: 'none'
    };

    const linkStyle = {
      textDecoration: 'none'
    }

    return (
      <>
        <Header onSearch = {onSearch} />
        <Container fixed style={containerStyle} >
          <Card style={cardStyle}>
            <CardActionArea href="#/Map" style={linkStyle}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align={'center'} style={titleStyle}>
                  Map
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                alt="Map"
                height="200"
                image="images/Map.png"
                title="Map"
              />
            </CardActionArea>
          </Card>

          <Card style={cardStyle}>
            <CardActionArea href="#/Timeline" style={linkStyle}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align={'center'} style={titleStyle}>
                  Timeline
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                alt="Timeline"
                height="200"
                image="images/Timeline.png"
                title="Timeline"
              />
            </CardActionArea>
          </Card>
        </Container>
      </>
    );


  };

export default Visualizations;
