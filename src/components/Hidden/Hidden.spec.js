import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Hidden from './Hidden';
import styles from './Hidden.module.css';

configure({ adapter: new Adapter() });

describe('<Hidden />', () => {
  it('should be defined', () => {
    expect(Hidden).toBeDefined();
  });

  it('renders returned component correctly', () => {
    const tree = renderer
      .create(
        <Hidden small={true}>
          <span>Hidden content</span>
        </Hidden>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('has class of `small` and `hidden` if the `small` prop is passed as true', () => {
    const wrapper = shallow(
      <Hidden small={true}>
        <span>Hidden content</span>
      </Hidden>,
    );
    expect(wrapper.hasClass(styles.small)).toBe(true);
    expect(wrapper.hasClass(styles.hidden)).toBe(true);
  });

  it('has class of `medium` and `hidden` if the `medium` prop is passed as true', () => {
    const wrapper = shallow(
      <Hidden medium={true}>
        <span>Hidden content</span>
      </Hidden>,
    );
    expect(wrapper.hasClass(styles.medium)).toBe(true);
    expect(wrapper.hasClass(styles.hidden)).toBe(true);
  });

  it('has class of `large` and `hidden` if the `large` prop is passed as true', () => {
    const wrapper = shallow(
      <Hidden large={true}>
        <span>Hidden content</span>
      </Hidden>,
    );
    expect(wrapper.hasClass(styles.large)).toBe(true);
    expect(wrapper.hasClass(styles.hidden)).toBe(true);
  });

  it('has class of `xLarge` and `hidden` if the `xLarge` prop is passed as true', () => {
    const wrapper = shallow(
      <Hidden xLarge={true}>
        <span>Hidden content</span>
      </Hidden>,
    );
    expect(wrapper.hasClass(styles.xLarge)).toBe(true);
    expect(wrapper.hasClass(styles.hidden)).toBe(true);
  });

  it('has class of `small` and `visuallyHidden` if the `small` and `visuallyHidden` props are passed as true', () => {
    const wrapper = shallow(
      <Hidden small={true} visuallyHidden={true}>
        <span>Hidden content</span>
      </Hidden>,
    );

    expect(wrapper.hasClass(styles.small)).toBe(true);
    expect(wrapper.hasClass(styles.visuallyHidden)).toBe(true);
  });
});
