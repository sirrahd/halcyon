import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import ModalHeader from './modal_header';
import SettingsForm from '../../settings';

@injectIntl
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
    const { intl, onClose } = this.props;

    return(
      <div className='modal settings-modal'>
        <ModalHeader title={intl.formatMessage({ id: 'modal.settings', defaultMessage: 'Settings' })} onClose={onClose} />

        <div className='modal-content'>
          <SettingsForm />
        </div>
      </div>
    );
  }

}
