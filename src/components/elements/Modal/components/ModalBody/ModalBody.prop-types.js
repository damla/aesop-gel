import PropTypes from 'prop-types';

export const MODAL_BODY_COPY_PROP_TYPE_SHAPE = PropTypes.exact({
  closeDialog: PropTypes.string,
});

export const PROP_TYPES = {
  children: PropTypes.any,
  className: PropTypes.string,
  copy: MODAL_BODY_COPY_PROP_TYPE_SHAPE.isRequired,
  handleClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default PROP_TYPES;
