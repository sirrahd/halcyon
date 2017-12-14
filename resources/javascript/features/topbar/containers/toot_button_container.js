import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal';
import TootButton from '../components/toot_button';

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(openModal('COMPOSE_FORM', {}));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(TootButton);
