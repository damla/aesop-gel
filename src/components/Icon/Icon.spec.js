import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Icon from './Icon';

configure({ adapter: new Adapter() });

jest.mock('uuid', () => {
  let value = 0;
  return {
    v4: () => value++,
  };
});

describe('<Icon />', () => {
  it('should be defined', () => {
    expect(Icon).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Icon name="rightArrow" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders SVG with provided title prop correctly', () => {
    const tree = renderer
      .create(<Icon name="rightArrow" title="aesop" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<Icon /> error handling.', () => {
  it('should return `null` if svg name is not found', () => {
    const component = shallow(<Icon name="foo" />);
    expect(component.type()).toEqual(null);
  });
});
