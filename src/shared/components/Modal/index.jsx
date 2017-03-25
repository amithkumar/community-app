/**
 * This generic component will implement the semi-transparent background
 * and the white window in the center, which wraps the content provided as children.
 *
 * When semi-transparent background is clicked, it should trigger the onCancel()
 * callback passed from the parent.
 */

import React, { PropTypes as PT } from 'react';
import _ from 'lodash';
import './styles.scss';

export default function Modal(props) {
  return (
    <div>
      <div styleName="modal-container">{props.children}</div>
      <button styleName="bg-overlay" onClick={() => props.onCancel()} />
    </div>
  );
}
Modal.defaultProps = {
  onCancel: _.noop,
  children: null,
};

Modal.propTypes = {
  onCancel: PT.func,
  children: PT.node,
};
