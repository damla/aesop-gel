import React from 'react';
import renderer from 'react-test-renderer';
import HeroWithContent from './HeroWithContent';
import HeroWithContentFixture from './HeroWithContent.fixture';

describe('<HeroWithContent />', () => {
  it('should be defined', () => {
    expect(HeroWithContent).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <HeroWithContent
          copy={HeroWithContentFixture.copy}
          cta={HeroWithContentFixture.cta}
          heading={HeroWithContentFixture.heading}
          id={HeroWithContentFixture.id}
          image={HeroWithContentFixture.image}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
