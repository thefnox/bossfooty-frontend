/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'bossfooty.components.Footer.license.message',
    defaultMessage: '2018 Bossfooty©',
  },
  copyright: {
    id: 'bossfooty.components.Footer.copyright',
    defaultMessage: 'Copyright',
  },
  authorMessage: {
    id: 'bossfooty.components.Footer.author.message',
    defaultMessage: `
      Made by {author}.
    `,
  },
});
