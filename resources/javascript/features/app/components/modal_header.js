import React from 'react';
import PropTypes from 'prop-types';

export default class ModalHeader extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool,
    onClose: PropTypes.func,
  }

  render () {
    const { title, autoFocus, onClose } = this.props;

    return (
      <header className='modal-header'>
        <h3>
          {title}
        </h3>

        <button className='modal-header__close-button' onClick={onClose} autoFocus={autoFocus}>
          <i className='icon-time' aria-hidden='true' />
        </button>
      </header>
    );
  }

}
