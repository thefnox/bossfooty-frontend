/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'bossfooty.components.Footer.license.message',
    defaultMessage: 'Copyright 2018 Bossfooty©',
  },
  authorMessage: {
    id: 'bossfooty.components.Footer.author.message',
    defaultMessage: `
      Made by {author}.
    `,
  },
});
