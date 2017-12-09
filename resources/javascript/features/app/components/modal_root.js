import React from 'react';
import ComposeFormModal from './compose_form_modal';

export default class ModalRoot extends React.PureComponent {

  render() {
    return (
      <div className='modal-root'>
        <div className='modal-root_container'>
          <ComposeFormModal />
        </div>
      </div>
    );
  }

}
