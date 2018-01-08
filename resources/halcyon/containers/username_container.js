import { connect } from 'react-redux';
import Usernamme from '../components/username';

const mapStateToProps = state => ({
  usernameDisplay: state.getIn(['settings', 'halcyon', 'usernameDisplay']),
});

export default connect(mapStateToProps)(Usernamme);
