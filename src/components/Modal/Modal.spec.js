import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalBodyFixture from './components/ModalBody/ModalBody.fixture';
import Modal from './Modal';

configure({ adapter: new Adapter() });

jest.mock('react-dom');
const mockFn = jest.fn();

describe('<Modal /> with no root element', () => {
  it('returns null if no root element is found to bind to', () => {
    const component = shallow(
      <Modal copy={ModalBodyFixture.copy} isVisible={true} onClose={mockFn}>
        content
      </Modal>,
    );
    expect(component.type()).toEqual(null);
  });
});

describe('<Modal />', () => {
  let modalRoot = null;

  it('should be defined', () => {
    expect(Modal).toBeDefined();
  });

  beforeEach(() => {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'aesopModal');

    document.body.append(modalRoot);
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Modal
          copy={ModalBodyFixture.copy}
          isVisible={true}
          onClose={mockFn}
          portalId="aesopModalll"
        >
          content
        </Modal>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
