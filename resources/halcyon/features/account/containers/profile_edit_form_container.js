import { connect } from 'react-redux';
import { makeGetAccount } from '../../../selectors';
import {
  changeAvatar,
  changeDisplayName,
  changeNote,
} from '../../../actions/credentials';
import ProfileEditFrom from '../components/profile_edit_form';

const makeMapStateToProps = () => {
  const getAccount = makeGetAccount();

  const mapStateToProps = (state, { accountId }) => ({
    account: getAccount(state, accountId),
    note: state.getIn(['source', 'note']),
  });

  return mapStateToProps;
};

const mapDispatchToProps = dispatch => ({

  onChangeAvatar (file) {
    dispatch(changeAvatar(file));
  },

  onChangeDisplayName (text) {
    dispatch(changeDisplayName(text));
  },

  onChangeNote (text) {
    dispatch(changeNote(text));
  },
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(ProfileEditFrom);
