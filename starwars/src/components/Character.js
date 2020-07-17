// Write your Character component here
import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function Character(props){
    const {data} = props


    
    return (
        <div>
          <Card>
            <CardBody>
              <CardTitle>{data.name}</CardTitle>
              <CardSubtitle>{data.birth_year}</CardSubtitle>
              <CardText>
                  gender: {data.gender}<br />
                  hair color: {data.hair_color}<br />
                  height: {data.height}<br />
                  mass: {data.mass}<br />
                  skin_color: {data.skin_color}
                  </CardText>
            </CardBody>
          </Card>
        </div>
      );
    };

export default Character