import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import SettingsForm from '../../settings';

export default class SettingsModal extends React.PureComponent {

  static propTypes = {
    onClose: PropTypes.func.isRequired,
  }

  handleKeyDown = e => {
    switch(e.key) {
    case 'Enter':
      this.props.onClose();
      break;
    }
  }

  render() {
    const { onClose } = this.props;

    return(
      <div className='modal-root__modal settings-modal'>
        <header className='modal-root__modal__header'>
          <h3>
            <FormattedMessage id='modal.settings' defaultMessage='Settings' />
          </h3>
        </header>

        <button className='modal-root__modal__close' onClick={onClose} onKeyDown={this.handleKeyDown}>
          <i className='icon-time' aria-hidden='true' />
        </button>

        <SettingsForm />
      </div>
    );
  }

}
