import React from 'react';
import renderer from 'react-test-renderer';
import Figure from '~/components/elements/Figure';
import Image from '~/components/elements/Image';
import DoubleImage from './DoubleImage';
import DoubleImageFixture from './DoubleImage.fixture';

describe('<DoubleImage />', () => {
  it('should be defined', () => {
    expect(DoubleImage).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <DoubleImage
          id={DoubleImageFixture.id}
          left={
            <Figure
              caption={DoubleImageFixture.left.figure.caption}
              id={DoubleImageFixture.left.figure.id}
            >
              <Image
                altText={DoubleImageFixture.left.image.altText}
                cta={{
                  id: DoubleImageFixture.left.image.cta.id,
                  url: DoubleImageFixture.left.image.cta.url,
                }}
                large={DoubleImageFixture.left.image.large}
                medium={DoubleImageFixture.left.image.medium}
                small={DoubleImageFixture.left.image.small}
              />
            </Figure>
          }
          right={
            <Figure
              caption={DoubleImageFixture.right.figure.caption}
              id={DoubleImageFixture.right.figure.id}
            >
              <Image
                altText={DoubleImageFixture.right.image.altText}
                cta={{
                  id: DoubleImageFixture.right.image.cta.id,
                  url: DoubleImageFixture.right.image.cta.url,
                }}
                large={DoubleImageFixture.right.image.large}
                medium={DoubleImageFixture.right.image.medium}
                small={DoubleImageFixture.right.image.small}
              />
            </Figure>
          }
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
