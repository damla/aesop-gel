import React from 'react';
import renderer from 'react-test-renderer';
import TextOverHero from './TextOverHero';
import TextOverHeroFixture from './TextOverHero.fixture';

describe('<TextOverHero />', () => {
  it('should be defined', () => {
    expect(TextOverHero).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <TextOverHero
          copy={TextOverHeroFixture.copy}
          cta={TextOverHeroFixture.cta}
          id={TextOverHeroFixture.id}
          title={TextOverHeroFixture.title}
          video={TextOverHeroFixture.video}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
