import { connect } from 'react-redux';
import { me } from '../../../initial_state';
import AvatarDropdown from '../components/avatar_dropdown';

const mapStateToProps = state => ({
  account: state.getIn(['accounts', me]),
});

export default connect(
  mapStateToProps,
  null
)(AvatarDropdown);
