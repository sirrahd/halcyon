import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { FormattedMessage } from 'react-intl';

import Avatar from '../../../containers/avatar_container';
import DispalyName from '../../../components/display_name';

export default class AccountsSettings extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
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
        </form>
      </div>
    );
  }

}
