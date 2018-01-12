import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Textarea from 'react-textarea-autosize';

import Username from '../../../components/username';
import Avatar from '../../../containers/avatar_container';

export default class ProfileEditForm extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
    note: PropTypes.string,
    onChangeAvatar: PropTypes.func.isRequired,
    onChangeDisplayName: PropTypes.func.isRequired,
    onChangeNote: PropTypes.func.isRequired,
  }

  state = {
    avatarPreviewUrl: null,
  }

  handleChangeAvatar = e => {
    if (e.target.files.length === 1) {
      this.props.onChangeAvatar(e.target.files);

      let fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onloadend = e => {
        this.setState({ avatarPreviewUrl: e.target.result });
      };
    }
  }

  handleChangeDisplayName = e => {
    const value = e.target.value;
    this.props.onChangeDisplayName(value);
  }

  handleChangeNote = e => {
    const value = e.target.value;
    this.props.onChangeNote(value);
  }

  render () {
    const { account, note } = this.props;
    const { avatarPreviewUrl } = this.state;

    if ( !account ) {
      return null;
    }

    return (
      <div className='profile-edit-form'>
        <div className='profile-edit-form__avatar'>
          <Avatar account={account} size={200} />
          <div>
            { avatarPreviewUrl ? <div style={{ backgroundImage: `url("${avatarPreviewUrl}")` }} /> : null }
            <input type='file' multiple='false' onChange={this.handleChangeAvatar} />
          </div>
        </div>

        <div className='profile-edit-form__form'>
          <div className='profile-edit-form__display-name'>
            <input type='text' defaultValue={account.get('display_name')} onChange={this.handleChangeDisplayName} />
          </div>

          <div className='profile-edit-form__username'>
            <Username account={account} />
          </div>

          <div className='profile-edit-form__note'>
            <Textarea defaultValue={note} onChange={this.handleChangeNote} />
          </div>
        </div>
      </div>
    );
  }

}
