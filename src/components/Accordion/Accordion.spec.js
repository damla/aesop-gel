import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';

/** @TODO https://github.com/springload/react-accessible-accordion/issues/233 */
jest.mock('react-accessible-accordion');

configure({ adapter: new Adapter() });

describe('<Accordion />', () => {
  it('should be defined', () => {
    expect(Accordion).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Accordion
          items={[
            {
              id: 'id',
              heading: 'heading',
              content: 'content',
            },
          ]}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should return `null` if the length of the `items` prop is 0', () => {
    const component = shallow(<Accordion items={[]} />);
    expect(component.type()).toEqual(null);
  });
});
