import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Button from './Button';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<Button />', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('renders base component correctly with `handleClick` prop', () => {
    const tree = renderer
      .create(
        <Button className="aesop" handleClick={mockFn} title="Aēsop">
          Button
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders base component correct with `type` prop', () => {
    const tree = renderer
      .create(
        <Button className="aesop" title="Aēsop" type="submit">
          Submit
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders base component correctly with `href` prop', () => {
    const tree = renderer
      .create(
        <Button href="https://aesop.com" title="Aēsop">
          Button
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders base component correctly with `to` prop', () => {
    const tree = renderer
      .create(
        <Button title="Aēsop" to="about">
          Button
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders component with icon correctly', () => {
    const tree = renderer
      .create(
        <Button title="Aēsop" to="about">
          Button
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders disabled variation correctly', () => {
    const tree = renderer
      .create(
        <Button handleClick={mockFn} isEnabled={false} title="Aēsop">
          Disabled Button
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders alternate variation correctly', () => {
    const tree = renderer
      .create(
        <Button handleClick={mockFn} isAlternate={true} title="Aēsop">
          Alternate Button
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call mock function when button is clicked', () => {
    shallow(
      <Button handleClick={mockFn} title="Aēsop">
        Aēsop
      </Button>,
    ).simulate('click');

    expect(mockFn).toHaveBeenCalled();
  });
});

describe('<Button /> error handling.', () => {
  it('should return `null` if `handleClick` and `icon` are passed as props', () => {
    const component = shallow(
      <Button handleClick={mockFn} icon={true} title="Aēsop">
        Aēsop
      </Button>,
    );
    expect(component.type()).toEqual(null);
  });

  it('should return `null` if `to` or `external` are passed with `disabled` as props', () => {
    const component = shallow(
      <Button isEnabled={false} title="Aēsop" to="about">
        Aēsop
      </Button>,
    );
    expect(component.type()).toEqual(null);
  });

  it('should return `null` if `inline` and `alternate` are passed as props', () => {
    const component = shallow(
      <Button isAlternate={true} isInline={true} title="Aēsop" to="about">
        Aēsop
      </Button>,
    );
    expect(component.type()).toEqual(null);
  });

  it('should return `null` if a provided `href` prop is invalid', () => {
    const component = shallow(
      <Button href="aesop" title="Aēsop">
        Aēsop
      </Button>,
    );
    expect(component.type()).toEqual(null);
  });

  it('should return `null` if at least `to`, `href` or `handleClick` are not provided as a prop', () => {
    const component = shallow(<Button title="Aēsop">Aēsop</Button>);
    expect(component.type()).toEqual(null);
  });
});
