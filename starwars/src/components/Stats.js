import React from 'react'
import {Fade} from 'reactstrap'

function Stats(props){
    const {data, fadeIn} = props
return(
<Fade in={fadeIn} tag="h5" fontWeight = 'strong'>
    gender: {data.gender}<br />
    hair color: {data.hair_color}<br />
    height: {data.height}<br />
    mass: {data.mass}<br />
    skin color: {data.skin_color}
</Fade>
)}

export default Stats