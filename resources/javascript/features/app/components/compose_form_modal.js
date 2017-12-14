import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ComposeFromContainer from '../../compose/containers/compose_form_container';

export default class ComposeFormModal extends React.PureComponent {

  static propTypes = {
    onClose: PropTypes.func.isRequired,
  }

  render() {
    return(
      <div className='modal-root__modal compose-form-modal'>
        <header className='compose-form-modal__header'>
          <h3 className='compose-form-modal__title'>
            <FormattedMessage id='modal.compose_form' defaultMessage='Compose new toot' />
          </h3>
        </header>

        <ComposeFromContainer />
      </div>
    );
  }

}
