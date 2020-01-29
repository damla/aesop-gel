import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Modal from './Modal';

jest.mock('react-dom');
const mockFn = jest.fn();

describe('<Modal />', () => {
  let modalRoot;

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
        <Modal handleClose={mockFn} isVisible={true}>
          <h1>Heading</h1>
        </Modal>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
