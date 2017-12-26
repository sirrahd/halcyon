import React from 'react';
import { Link } from 'react-router-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import normalizeAcct from '../../../normalize_acct';
import replaceLink from '../../../replace_link';

import Avatar from '../../../containers/avatar_container';

export default class AccountLetterhead extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
  }

  render () {
    const { account } = this.props;

    if ( !account ) {
      return <div />;
    }

    const id              = account.get('id');
    const acct            = normalizeAcct(account.get('acct'), true);
    const displayNameHtml = { __html: account.get('display_name_html') };
    const noteHtml        = { __html: replaceLink(account.get('note_emojified')) };

    return (
      <div className='account-letterhead'>
        <div className='account-letterhead__avatar'>
          <Avatar account={account} size={200} />
        </div>

        <Link to={`/accounts/${id}`} className='account-letterhead__link'>
          <h3 className='account-letterhead__display-name' dangerouslySetInnerHTML={displayNameHtml} />
          <span className='account-letterhead__acct'>{acct}</span>
        </Link>

        <section className='account-letterhead__note' dangerouslySetInnerHTML={noteHtml} />
      </div>
    );
  }

}
