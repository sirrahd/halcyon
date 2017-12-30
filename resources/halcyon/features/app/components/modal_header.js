import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import IconButton from '../../../components/icon_button';

const messages = defineMessages({
  close: { id: 'modal.close', defaultMessage: 'Close this modal' },
});

@injectIntl
export default class ModalHeader extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool,
    onClose: PropTypes.func,
  }

  render () {
    const { intl, title, autoFocus, onClose } = this.props;

    return (
      <header className='modal-header'>
        <h3>
          {title}
        </h3>

        <IconButton
          className='modal-header__close-button'
          icon='icon-time'
          title={intl.formatMessage(messages.close)}
          autoFocus={autoFocus}
          onClick={onClose}
        />
      </header>
    );
  }

}
