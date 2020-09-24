import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Footer from './Footer';
import FooterFixture from './Footer.fixture';
import NewsLetterSignUpFixture from '../NewsLetterSignUp/NewsLetterSignUp.fixture';
import NotificationModalFixture from '~/components/NotificationModal/NotificationModal.fixture';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Footer
          blocks={FooterFixture.blocks}
          consentErrorMsg={NewsLetterSignUpFixture.consentErrorMsg}
          errorMessage={NewsLetterSignUpFixture.errorMessage}
          notificationMessage={NotificationModalFixture.notificationMessage}
          showTermsConditionsTextBox={true}
          subscriptionMessage={NewsLetterSignUpFixture.subscriptionMessage}
          termsAndCondition={NewsLetterSignUpFixture.termsAndCondition}
          termsMessage={NewsLetterSignUpFixture.termsMessage}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
