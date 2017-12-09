import React from 'react';
import { FormattedMessage } from 'react-intl';
import ComposeFrom from '../../../components/compose_form';

export default class ComposeFormModal extends React.PureComponent {

  render() {
    return(
      <div className='modal-content modal-content--compose-form'>
        <header className='modal-content__header'>
          <h3 className='modal-content__title'>
            <FormattedMessage id='modal.compose_form' defaultMessage='Compose new toot' />
          </h3>
        </header>

        <ComposeFrom />
      </div>
    );
  }

}
