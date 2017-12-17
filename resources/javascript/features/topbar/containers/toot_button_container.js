import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TootButton from '../components/toot_button';

const mapDispatchToProps = (dispatch, props) => ({
  onClick() {
    props.history.push('/compose');
  },
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(TootButton));
