/**
 *
 * Asynchronously loads the component for WorkoutPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
