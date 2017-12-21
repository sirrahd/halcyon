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
        <header className='modal-root__modal__header'>
          <h3>
            <FormattedMessage id='modal.compose_form' defaultMessage='Compose new toot' />
          </h3>
        </header>

        <button className='modal-root__modal__close' onClick={this.props.onClose}>
          <i className='icon-time' aria-hidden='true' />
        </button>

        <div className='modal-root__modal__content'>
          <ComposeFromContainer />
        </div>
      </div>
    );
  }

}
