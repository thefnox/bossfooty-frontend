/*
 * WorkoutPage Messages
 *
 * This contains all the text for the WorkoutPage component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.WorkoutPage.header',
    defaultMessage: 'This is your workout',
  },
  dayZeroHeader: {
    id: 'app.containers.WorkoutPage.dayZeroHeader',
    defaultMessage: 'Your program will begin tomorrow!',
  },
  backInTime: {
    id: 'app.containers.WorkoutPage.backInTime',
    defaultMessage: `You can't go back in time, before your program began!`,
  },
  skipAhead: {
    id: 'app.containers.WorkoutPage.skipAhead',
    defaultMessage: `You cannot skip ahead further than your current workout day!`,
  },
  restDayHeader: {
    id: 'app.containers.WorkoutPage.restDayHeader',
    defaultMessage: `Today's your rest day, time to take a break and recover! Here's yesterday's training:`,
  },
  todayWorkoutHeader: {
    id: 'app.containers.WorkoutPage.todayWorkoutHeader',
    defaultMessage: `Day {day}`,
  },
  testDayHeader: {
    id: 'app.containers.WorkoutPage.testDayHeader',
    defaultMessage: `Before we begin, we need to know your 1 rep max for these exercises.`,
  },
});
