import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { FormattedMessage, defineMessages } from 'react-intl';

import Avatar from '../../../containers/avatar_container';
import DispalyName from '../../../components/display_name';

const messages = defineMessages({
  not_supported: { id: 'not_supported.generic', defaultMessage: 'This feature is not supported in your browser' },
});

export default class AccountsSettings extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    account: ImmutablePropTypes.map.isRequired,
    onShowMessage: PropTypes.func.isRequired,
  }

  handleProtocolHandlerEnable = e => {
    e.preventDefault();

    if (typeof navigator.registerProtocolHandler !== 'undefined') {
      const handlerUrl = window.location.protocol + '//' + window.location.host + '/intent?uri=%s';
      navigator.registerProtocolHandler('web+mastodon', handlerUrl, 'Halcyon');
    } else {
      this.props.onShowMessage({ message: this.props.intl.formatMessage(messages.not_supported), interval: 10000 });
    }
  }

  render () {
    const { account } = this.props;

    return(
      <div className='settings__content'>
        <h3><FormattedMessage id='settings.accounts' defaultMessage='Accounts' /></h3>

        <form className='account-setting-form'>
          <div>
            <Avatar size={50} account={account} />
            <DispalyName account={account} />
          </div>

          <div>
            <button className='generic-button' onClick={this.handleProtocolHandlerEnable}>
              web+mastodon
            </button>
          </div>
        </form>
      </div>
    );
  }

}
