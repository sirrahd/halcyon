import { connect } from 'react-redux';
import { me } from '../../../initial_state';
import AccountsSettings from '../components/accounts_settings';

const mapStateToProps = state => ({
  account: state.getIn(['accounts', me]),
});

export default connect(
  mapStateToProps,
  null,
)(AccountsSettings);
