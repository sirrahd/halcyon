import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { defineMessages } from 'react-intl';
import IconButton from '../components/icon_button';

const messages = defineMessages({
  dismiss: { id: 'message.dismiss', defaultMessage: 'Dismiss this message' },
});

export default class Message extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    show: PropTypes.bool,
    text: PropTypes.string,
    time: PropTypes.number,
    onClose: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
  }

  componentWillReceiveProps (nextProps) {
    if ( nextProps.show ) {
      setTimeout(() => this.props.onClose(), this.props.time);
    }
  }

  render () {
    const { intl, show, text, onClose, isModalOpen } = this.props;

    return (
      <div className={classNames('message-container', { 'message-container--show': show, 'message-container--ahead-modal' : isModalOpen })}>
        <div className='message'>
          <div className='message__text'>
            <span>{ text }</span>
          </div>

          <IconButton
            className='message__close-button'
            icon='icon-time'
            title={intl.formatMessage(messages.dismiss)}
            onClick={onClose}
          />
        </div>
      </div>
    );
  }

}
