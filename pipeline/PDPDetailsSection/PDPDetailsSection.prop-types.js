import PropTypes from 'prop-types';

export const PDP_DETAILS_SECTION_COPY_PROP_TYPE_SHAPE = PropTypes.exact({
  label: PropTypes.string,
});

export const PROP_TYPES = {
  classname: PropTypes.string,
  copy: PDP_DETAILS_SECTION_COPY_PROP_TYPE_SHAPE.isRequired,
  field1Description: PropTypes.string,
  field1Label: PropTypes.string,
  field2Description: PropTypes.string,
  field2Label: PropTypes.string,
  ingredientText: PropTypes.string,
  keyIngredient: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  sku: PropTypes.string,
};

export default PROP_TYPES;
