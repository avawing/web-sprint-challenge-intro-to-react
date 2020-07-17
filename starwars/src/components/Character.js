// Write your Character component here
import React, {useState} from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Fade
  } from 'reactstrap';

function Character(props){
    const {data, bounty} = props
    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);


    
    return (
          <Card>
            <CardBody>
              <CardTitle>{data.name}</CardTitle>
              <CardSubtitle>{bounty} Credits</CardSubtitle>
              <CardText>
                  <Fade in={fadeIn} tag="h5">
                  gender: {data.gender}<br />
                  hair color: {data.hair_color}<br />
                  height: {data.height}<br />
                  mass: {data.mass}<br />
                  skin color: {data.skin_color}
                  </Fade>
                  <Button color="danger" onClick={toggle}>Bounty Information</Button>
                  </CardText>
            </CardBody>
          </Card>
      );
    };

export default Character