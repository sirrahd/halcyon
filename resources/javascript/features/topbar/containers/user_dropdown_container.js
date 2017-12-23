import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { makeGetAccount } from '../../../selectors';
import { me } from '../../../initial_state';
import { openModal, closeModal } from '../../../actions/modal';
import { isUserTouching } from '../../../is_mobile';
import UserDropdown from '../components/user_dropdown';

const makeMapStateToProps = () => {
  const getAccount = makeGetAccount();

  const mapStateToProps = state => ({
    account: getAccount(state, me),
    isModalOpen: state.get('modal').modalType === 'ACTIONS',
  });

  return mapStateToProps;
};

const mapDispatchToProps = dispatch => ({
  isUserTouching,

  onModalOpen(type, props) {
    dispatch(openModal(type, props));
  },

  onModalClose() {
    dispatch(closeModal());
  },
});

export default injectIntl(connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(UserDropdown));
