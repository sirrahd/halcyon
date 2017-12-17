import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { me } from '../../../initial_state';
import { openModal, closeModal } from '../../../actions/modal';
import UserDropdown from '../components/user_dropdown';

const mapStateToProps = state => ({
  account: state.getIn(['accounts', me]),
});

const mapDispatchToProps = dispatch => ({
  onModalOpen(type, props) {
    dispatch(openModal(type, props));
  },

  onModalClose() {
    dispatch(closeModal());
  },
});

export default injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDropdown));
