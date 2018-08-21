/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const LOAD_USER_STATUS = 'bossfooty/App/LOAD_USER_STATUS'
export const LOAD_USER_STATUS_SUCCESS = 'bossfooty/App/LOAD_USER_STATUS_SUCCESS'
export const LOAD_USER_STATUS_ERROR = 'bossfooty/App/LOAD_USER_STATUS_ERROR'
export const LOAD_PAYMENT_INFO = 'bossfooty/App/LOAD_PAYMENT_INFO'
export const LOAD_REPOS = 'bossfooty/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'bossfooty/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'bossfooty/App/LOAD_REPOS_ERROR';
