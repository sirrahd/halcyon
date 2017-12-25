import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ERROR_MESSAGE_INTERVAL } from '../constants';

export default class Message extends React.PureComponent {

  static propTypes = {
    show: PropTypes.bool,
    message: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
  }

  componentWillReceiveProps (nextProps) {
    if ( nextProps.show ) {
      setTimeout(() => this.props.onClose(), ERROR_MESSAGE_INTERVAL);
    }
  }

  render () {
    const { show, message, onClose, isModalOpen } = this.props;

    return (
      <div className={classNames('message-container', { 'message-container--show': show, 'message-container--ahead-modal' : isModalOpen })}>
        <div className='message'>
          <div className='message__text'>
            <span>{ message }</span>
          </div>

          <button className='message__close' onClick={onClose}>
            <i className='icon-time' aria-hidden='true' />
          </button>
        </div>
      </div>
    );
  }

}
