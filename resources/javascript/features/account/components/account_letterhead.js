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
    let id, acct, displayNameHtml, noteHtml;

    if ( account !== null ) {
      id              = account.get('id');
      acct            = normalizeAcct(account.get('acct'), true);
      displayNameHtml = { __html: account.get('display_name_html') };
      noteHtml        = { __html: replaceLink(account.get('note_emojified')) };
    } else {
      id              = '';
      acct            = '';
      displayNameHtml = { __html: '' };
      noteHtml        = { __html: '' };
    }

    return (
      <div className='account-letterhead'>
        <div className='account-letterhead__avatar'>
          {
            account ? <Avatar account={account ? account : false} size={200} /> : <div />
          }
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
