import React from 'react';
import renderer from 'react-test-renderer';
import ModalBody from './ModalBody';
import ModalBodyFixture from './ModalBody.fixture';

const mockFn = jest.fn();

describe('<ModalBody />', () => {
  it('should be defined', () => {
    expect(ModalBody).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ModalBody
          copy={ModalBodyFixture.copy}
          isVisible={true}
          onClose={mockFn}
        >
          Body Content
        </ModalBody>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when clicking on the close button', () => {
    it('should invoke handleClose', () => {
      const component = renderer.create(
        <ModalBody
          copy={ModalBodyFixture.copy}
          isVisible={true}
          onClose={mockFn}
        >
          Body Content
        </ModalBody>,
      );

      const closeButton = component.root.findByProps({
        'data-test-ref': 'MODAL_CLOSE_BUTTON',
      });

      closeButton.props.onClick();

      expect(mockFn).toHaveBeenCalled();
    });
  });
});
