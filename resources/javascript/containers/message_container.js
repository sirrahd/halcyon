import { connect } from 'react-redux';
import { hideMessage } from '../actions/message';
import Message from '../components/message';

const mapStateToProps = state => ({
  show: state.getIn(['message', 'show']),
  text: state.getIn(['message', 'text']),
  time: state.getIn(['message', 'time']),
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
