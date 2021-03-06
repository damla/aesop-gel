import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import DefinitionList from '~/components/DefinitionList';
import Image from '~/components/Image';
import MediaWithContent from './MediaWithContent';
import MediaWithContentFixture from './MediaWithContent.fixture';

configure({ adapter: new Adapter() });

describe('<MediaWithContent />', () => {
  it('should be defined', () => {
    expect(MediaWithContent).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <MediaWithContent
          content={
            <DefinitionList
              items={MediaWithContentFixture.definitionList.items}
            />
          }
          copy={MediaWithContentFixture.copy.expectations}
          media={<Image {...MediaWithContentFixture.image.default} />}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
