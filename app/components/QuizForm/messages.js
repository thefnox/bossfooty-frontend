/*
 * QuizForm Messages
 *
 * This contains all the text for the QuizForm component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.QuizForm.header',
    defaultMessage: 'To begin the program, first we need to ask you some questions...',
  },
  question1: {
    id: 'app.components.QuizForm.question1',
    defaultMessage: 'What position do you play?',
  },
  question2: {
    id: 'app.components.QuizForm.question2',
    defaultMessage: 'How old are you?',
  },
  question3: {
    id: 'app.components.QuizForm.question3',
    defaultMessage: 'How much experience do you have lifting in a gym or weight room?',
  },
  question4: {
    id: 'app.components.QuizForm.question4',
    defaultMessage: 'If you were to play a 90 minute game tonight, how long would you last?',
  },
});
