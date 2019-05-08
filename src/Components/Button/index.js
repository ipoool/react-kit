import React from "react";
import PropTypes from "prop-types";

/** Button component description */
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
Button.defaultProps = {
  onClick: () => {}
};
Button.propTypes = {
  /** Note for onClick property */
  onClick: PropTypes.func,
  /** Note for children property */
  children: PropTypes.node.isRequired.isRequired
};
export default Button;
