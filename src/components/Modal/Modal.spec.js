import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './Modal';

jest.mock('react-dom');
const mockFn = jest.fn();

describe('<Modal />', () => {
  let modalRoot = null;

  it('should be defined', () => {
    expect(Modal).toBeDefined();
  });

  beforeEach(() => {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');

    document.body.append(modalRoot);
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Modal isVisible={true} onClose={mockFn}>
          <h1>Heading</h1>
        </Modal>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
