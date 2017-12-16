import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { me } from '../../../initial_state';
import UserDropdown from '../components/user_dropdown';

const mapStateToProps = state => ({
  account: state.getIn(['accounts', me]),
});

export default injectIntl(connect(
  mapStateToProps,
)(UserDropdown));
