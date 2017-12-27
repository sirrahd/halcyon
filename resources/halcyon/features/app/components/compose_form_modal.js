import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import ModalHeader from './modal_header';
import ComposeFromContainer from '../../compose/containers/compose_form_container';

@injectIntl
export default class ComposeFormModal extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  render() {
    const { intl, onClose } = this.props;

    return(
      <div className='modal compose-form-modal'>
        <ModalHeader title={intl.formatMessage({ id: 'modal.compose_form', defaultMessage: 'Compose new Toot' })} onClose={onClose} />

        <div className='modal-content'>
          <ComposeFromContainer />
        </div>
      </div>
    );
  }

}
