import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { autoPlayGif } from '../../../initial_state';

import AccountHeaderCounters from '../components/account_header_counters';
import FollowButtonContainer from '../../../containers/follow_button_container';

export default class AccountHeader extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
    location: PropTypes.object.isRequired,
    onChangeHeader: PropTypes.func.isRequired,
    isEditing: PropTypes.bool,
  }

  state = {
    headerPreviewUrl: null,
  }

  componentWillReceiveProps (nextProps) {
    if ( this.props.isEditing && !nextProps.isEditing ) {
      this.setState({ headerPreviewUrl: null });
    }
  }

  handleChangeHeader = e => {
    if (e.target.files.length === 1) {
      this.props.onChangeHeader(e.target.files);

      let fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onloadend = e => {
        this.setState({ headerPreviewUrl: e.target.result });
      };
    }
  }

  render () {
    const { account, location, isEditing } = this.props;
    const { headerPreviewUrl } = this.state;

    if ( !account ) {
      return <div />;
    }

    const src = autoPlayGif ? account.get('header') : account.get('header_static');
    const previewSrc = isEditing && headerPreviewUrl;

    return(
      <header className='account-header'>
        <div className='account-header__header' style={{ backgroundImage: `url(${previewSrc || src})` }}>
          {isEditing ? <input type='file' multiple='false' onChange={this.handleChangeHeader} /> : null}
        </div>

        <div className='account-header__banner'>
          <div className='account-header__banner-inner'>
            <AccountHeaderCounters account={account} location={location} />

            <div className='account-header-follow-button'>
              <FollowButtonContainer accountId={account.get('id')} />
            </div>
          </div>
        </div>
      </header>
    );
  }

}
