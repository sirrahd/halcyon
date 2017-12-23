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
      <div className='user-navigation__toot-button'>
        <button className='toot-button' onClick={onClick}>
          <FormattedMessage id='compose_form.toot' defaultMessage='Toot' />
        </button>
      </div>
    );
  }

}
