import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
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

export default injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message));
