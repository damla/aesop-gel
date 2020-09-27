import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationBar from './NavigationBar';
import * as Hyperlink from '~/components/Hyperlink';
import styles from './NavigationBar.module.css';

configure({ adapter: new Adapter() });

describe('<NavigationBar />', () => {
  const MockHyperLink = jest.fn(() => null);

  const parentLink = {
    text: 'Martha',
    url: '/test',
  };
  const childLinks = [
    {
      text: 'Bruce',
      url: '/child1',
      hasTargetInNewWindow: true,
    },
    {
      text: 'Cornholio',
      url: '/child2',
      hasTargetInNewWindow: false,
    },
  ];

  beforeEach(() => {
    MockHyperLink.mockClear();
    jest.spyOn(Hyperlink, 'default').mockImplementation(MockHyperLink);
  });

  it('should not render the component if no links are provided', () => {
    const wrapper = mount(<NavigationBar />);

    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it(`should not render a parent link if it's not provided`, () => {
    mount(<NavigationBar childLinks={childLinks} />);

    expect(MockHyperLink.mock.calls[0][0].className).not.toContain(
      styles.hasChildren,
    );
  });

  it('should not render the separator if child links are not provided', () => {
    mount(<NavigationBar parentLink={parentLink} />);

    expect(MockHyperLink.mock.calls[0][0].className).not.toContain(
      styles.hasChildren,
    );
  });

  it('should mark only the selected url as active', () => {
    mount(
      <NavigationBar
        childLinks={childLinks}
        parentLink={parentLink}
        selectedUrl="/child1"
      />,
    );

    expect(MockHyperLink.mock.calls[0][0].className).not.toContain(
      styles.isActive,
    ); // parent
    expect(MockHyperLink.mock.calls[1][0].className).toContain(styles.isActive); // active child
    expect(MockHyperLink.mock.calls[2][0].className).not.toContain(
      styles.isActive,
    ); // inactive child
  });
});
