import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { FormattedDate } from 'react-intl';
import replaceLink from '../../../replace_link';

import Avatar from '../../../containers/avatar_container';
import DisplayName from '../../../components/display_name';
import Username from '../../../containers/username_container';
import CompactGallery from './compact_gallery';
import ProfileEditForm from '../containers/profile_edit_form_container';

export default class AccountLetterhead extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
    isEditing: PropTypes.bool.isRequired,
  }

  render () {
    const { account, isEditing } = this.props;

    if ( !account ) {
      return <div />;
    }

    if ( isEditing ) {
      return <ProfileEditForm accountId={account.get('id')} />;
    }

    const noteHtml = { __html: replaceLink(account.get('note_emojified')) };

    return (
      <div className='account-letterhead'>
        <div className='account-letterhead__avatar'>
          <Avatar account={account} size={200} />
        </div>

        <Link to={`/accounts/${account.get('id')}`} className='account-letterhead__link'>
          <DisplayName account={account} />
          <Username account={account} />
        </Link>

        <section className='account-letterhead__note' dangerouslySetInnerHTML={noteHtml} />

        <div className='account-letterhead__created-at'>
          <i className='icon-clock' aria-hidden='true' />
          <time dateTime={account.get('created_at')}>
            <FormattedDate
              value={account.get('created_at')}
              year='numeric'
              month='long'
              day='2-digit'
            />
          </time>
        </div>

        <CompactGallery accountId={account.get('id')} limit={6} />
      </div>
    );
  }

}
