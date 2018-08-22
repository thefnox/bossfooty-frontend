/**
 *
 * WorkoutItem
 *
 */

import React from 'react';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpandMoreIcon,
  Grid,
  Table,
  TableRow,
  TableBody,
  TableCell
} from '@material-ui/core'
import YouTube from 'react-youtube';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const getRepMax = (repMaxes, name) => {
  const result = repMaxes.find(({exercise}) => exercise.name === name);
  return result ? result.pounds : null;
}

const _onReady = (event) => {
  event.target.pauseVideo();
}

function WorkoutItem(props) {
  const { 
    classes,
    index,
    exercise: { 
      exercise: {
        name,
        trainingType,
        targetArea,
        videoURL
      }, 
      percent_rm: percentOf1RM,
      intensity,
      rest_sets: restBetweenSets,
      rest_reps: restBetweenReps,
      sets,
      reps,
      weight
    },
    repMaxes,
    expanded
  } = props;
  const repMax = getRepMax(repMaxes, name)
  
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary >
        <Typography className={classes.exerciseHeading}><strong>{index}</strong>. {name}</Typography>
        <Typography className={classes.exerciseSecondaryHeading}>{intensity}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={40}>
          <Grid item xs={12} sm={12} md={12}>
            <Table className={classes.exerciseTable}>
              <TableBody>
                {
                  reps && (
                    <TableRow>
                      <TableCell>Reps:</TableCell>
                      <TableCell>{reps}</TableCell>
                    </TableRow>
                  )
                }
                {
                  sets && (
                    <TableRow>
                      <TableCell>Sets:</TableCell>
                      <TableCell>{sets}</TableCell>
                    </TableRow>
                  )
                }
                {
                  restBetweenReps && (
                    <TableRow>
                      <TableCell>Rest between reps:</TableCell>
                      <TableCell>{restBetweenReps}</TableCell>
                    </TableRow>
                  )
                }
                {
                  restBetweenSets && (
                    <TableRow>
                      <TableCell>Rest between sets:</TableCell>
                      <TableCell>{restBetweenSets}</TableCell>
                    </TableRow>
                  )
                }
                {
                  percentOf1RM && repMax ? (
                    <TableRow>
                      <TableCell>Weight:</TableCell>
                      <TableCell>{repMax * percentOf1RM} ({`${percentOf1RM * 100 }%`} of 1RM)</TableCell>
                    </TableRow>
                  ) : weight && (
                    <TableRow>
                      <TableCell>Weight:</TableCell>
                      <TableCell>{weight}</TableCell>
                    </TableRow>
                  )
                }
                {
                  trainingType && (
                    <TableRow>
                      <TableCell>Training type:</TableCell>
                      <TableCell>{trainingType}</TableCell>
                    </TableRow>
                  )
                }
                {
                  targetArea && (
                    <TableRow>
                      <TableCell>Target area:</TableCell>
                      <TableCell>{targetArea}</TableCell>
                    </TableRow>
                  )
                }
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <YouTube
              videoId={videoURL.split('v=')[1]}
              onReady={_onReady}/>
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

WorkoutItem.propTypes = {};

export default WorkoutItem;
