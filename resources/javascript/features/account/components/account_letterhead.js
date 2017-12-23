import React from 'react';
import { Link } from 'react-router-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import normalizeAcct from '../../../normalize_acct';
import replaceLink from '../../../replace_link';

import Avatar from '../../../containers/avatar_container';

export default class AccountLetterhead extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
  }

  render () {
    const { account } = this.props;

    if ( account === null ) {
      return null;
    }

    const id              = account.get('id');
    const acct            = normalizeAcct(account.get('acct'), true);
    const displayNameHtml = { __html: account.get('display_name') };
    const noteHtml        = { __html: replaceLink(account.get('note')) };

    return (
      <div className='account-letterhead'>
        <div className='account-letterhead__avatar'>
          <Avatar account={account} size={200} />
        </div>

        <Link to={`/accounts/${id}`} className='account-letterhead__link'>
          <h3 className='account-letterhead__display-name' dangerouslySetInnerHTML={displayNameHtml} />
          <span className='account-letterhead__acct'>{ acct }</span>
        </Link>

        <section className='account-letterhead__note' dangerouslySetInnerHTML={noteHtml} />
      </div>
    );
  }

}
