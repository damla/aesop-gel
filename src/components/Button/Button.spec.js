import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Button from './Button';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<Button />', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('renders base component correctly with `onClick` prop', () => {
    const tree = renderer
      .create(
        <Button className="aesop" onClick={mockFn} title="Aēsop">
          Button
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  //   it('renders base component correct with `type` prop', () => {
  //     const tree = renderer
  //       .create(
  //         <Button className="aesop" title="Aēsop" type="submit">
  //           Submit
  //         </Button>,
  //       )
  //       .toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  //
  //   it('renders base component correctly with `href` prop', () => {
  //     const tree = renderer
  //       .create(
  //         <Button href="https://aesop.com" title="Aēsop">
  //           Button
  //         </Button>,
  //       )
  //       .toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  //
  //   it('renders base component correctly with `to` prop', () => {
  //     const tree = renderer
  //       .create(
  //         <Button title="Aēsop" to="about">
  //           Button
  //         </Button>,
  //       )
  //       .toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  //
  //   it('renders component with icon correctly', () => {
  //     const tree = renderer
  //       .create(
  //         <Button title="Aēsop" to="about">
  //           Button
  //         </Button>,
  //       )
  //       .toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  //
  //   it('renders disabled variation correctly', () => {
  //     const tree = renderer
  //       .create(
  //         <Button isEnabled={false} onClick={mockFn} title="Aēsop">
  //           Disabled Button
  //         </Button>,
  //       )
  //       .toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  //
  //   it('renders alternate variation correctly', () => {
  //     const tree = renderer
  //       .create(
  //         <Button isAlternate={true} onClick={mockFn} title="Aēsop">
  //           Alternate Button
  //         </Button>,
  //       )
  //       .toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  //
  //   it('should call mock function when button is clicked', () => {
  //     shallow(
  //       <Button onClick={mockFn} title="Aēsop">
  //         Aēsop
  //       </Button>,
  //     ).simulate('click');
  //
  //     expect(mockFn).toHaveBeenCalled();
  //   });
  // });
  //
  // describe('<Button /> error handling.', () => {
  //   it('should return `null` if `onClick` and `icon` are passed as props', () => {
  //     const component = shallow(
  //       <Button icon={true} onClick={mockFn} title="Aēsop">
  //         Aēsop
  //       </Button>,
  //     );
  //     expect(component.type()).toEqual(null);
  //   });
  //
  //   it('should return `null` if `to` or `external` are passed with `disabled` as props', () => {
  //     const component = shallow(
  //       <Button isEnabled={false} title="Aēsop" to="about">
  //         Aēsop
  //       </Button>,
  //     );
  //     expect(component.type()).toEqual(null);
  //   });
  //
  //   it('should return `null` if `inline` and `alternate` are passed as props', () => {
  //     const component = shallow(
  //       <Button isAlternate={true} isInline={true} title="Aēsop" to="about">
  //         Aēsop
  //       </Button>,
  //     );
  //     expect(component.type()).toEqual(null);
  //   });
  //
  //   it('should return `null` if a provided `href` prop is invalid', () => {
  //     const component = shallow(
  //       <Button href="aesop" title="Aēsop">
  //         Aēsop
  //       </Button>,
  //     );
  //     expect(component.type()).toEqual(null);
  //   });
  //
  //   it('should return `null` if at least `to`, `href` or `onClick` are not provided as a prop', () => {
  //     const component = shallow(<Button title="Aēsop">Aēsop</Button>);
  //     expect(component.type()).toEqual(null);
  //   });
});
