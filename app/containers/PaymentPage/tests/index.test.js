import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from '../messages';
import PaymentPage from '../index';

describe('<PaymentPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<PaymentPage />);
    expect(
      renderedComponent.contains(
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>,
      ),
    ).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<PaymentPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
