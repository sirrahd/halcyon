import { connect } from 'react-redux';
import { hideMessage } from '../actions/indicators';
import Message from '../components/message';

const mapStateToProps = state => ({
  show: state.getIn(['indicators', 'message', 'show']),
  message: state.getIn(['indicators', 'message', 'props', 'message']),
  isModalOpen: !!state.get('modal').modalType,
});

const mapDispatchToProps = dispatch => ({
  onClose() {
    dispatch(hideMessage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);
