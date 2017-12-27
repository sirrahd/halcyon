import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class TootButton extends React.PureComponent {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const { onClick } = this.props;

    return (
      <button className='toot-button' onClick={onClick}>
        <div className='toot-button__icon'>
          <i className='fa fa-pencil' aria-hidden='true' />
        </div>

        <div className='toot-button__label'>
          <FormattedMessage id='compose_form.toot' defaultMessage='Toot' />
        </div>
      </button>
    );
  }

}
