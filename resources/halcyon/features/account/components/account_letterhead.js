import React from 'react';
import { Link } from 'react-router-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { FormattedDate } from 'react-intl';
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

    const acct            = account.get('full_acct');
    const displayNameHtml = { __html: account.get('display_name_html') };
    const noteHtml        = { __html: replaceLink(account.get('note_emojified')) };

    return (
      <div className='account-letterhead'>
        <div className='account-letterhead__avatar'>
          <Avatar account={account} size={200} />
        </div>

        <Link to={`/accounts/${account.get('id')}`} className='account-letterhead__link'>
          <h3 className='account-letterhead__display-name' dangerouslySetInnerHTML={displayNameHtml} />
          <span className='account-letterhead__acct'>{acct}</span>
        </Link>

        <section className='account-letterhead__note' dangerouslySetInnerHTML={noteHtml} />

        <div className='account-letterhead__created-at'>
          <i className='fa fa-calendar' aria-hidden='true' />
          <time dateTime={account.get('created_at')}>
            <FormattedDate
              value={account.get('created_at')}
              year='numeric'
              month='long'
              day='2-digit'
            />
          </time>
        </div>
      </div>
    );
  }

}
