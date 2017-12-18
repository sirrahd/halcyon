import { connect } from 'react-redux';
import Avatar from '../components/avatar';

const mapStateToProps = (state) => ({
  round: state.getIn(['settings', 'halcyon', 'roundAvatar']),
});

export default connect(
  mapStateToProps,
  null,
)(Avatar);
