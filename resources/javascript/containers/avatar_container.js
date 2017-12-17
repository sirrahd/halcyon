import { connect } from 'react-redux';
import Avatar from '../components/avatar';

const mapStateToProps = (state) => ({
  round: state.getIn(['settings', 'halcyonRoundAvatar']),
});

export default connect(
  mapStateToProps,
  null,
)(Avatar);
