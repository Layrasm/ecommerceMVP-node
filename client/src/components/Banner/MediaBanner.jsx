import React from 'react';
import mediaBanner from '../../assets/media.png';
import './banner.css';
import { Grid } from '@material-ui/core';
import elon from '../../assets/elon.png';


const MediaBanner = () => {
  return (
    <Grid className="mediaContainer" container>
      <Grid item>
        <img className="elonImage" src={elon} />
      </Grid>
      <Grid item>
        <img className="mediaBanner" src={mediaBanner} />
      </Grid>
    </Grid>
  )
}

export default MediaBanner
