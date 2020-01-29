import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import DefinitionList from '~/components/DefinitionList';
import ImageWithHeaderAndContent from './ImageWithHeaderAndContent';
import ImageWithHeaderAndContentFixture from './ImageWithHeaderAndContent.fixture';

configure({ adapter: new Adapter() });

describe('<ImageWithHeaderAndContent />', () => {
  it('should be defined', () => {
    expect(ImageWithHeaderAndContent).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ImageWithHeaderAndContent
          content={
            <DefinitionList
              items={ImageWithHeaderAndContentFixture.definitionList}
            />
          }
          copy={ImageWithHeaderAndContentFixture.copyKit}
          image={ImageWithHeaderAndContentFixture.image}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
